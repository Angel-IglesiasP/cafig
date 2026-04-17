import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

const SERIES = {
  inflation: {
    id: "CPALTT01CAM659N",
    title: "Canada Inflation Rate",
    sourceLabel: "FRED series CPALTT01CAM659N",
    description: "Year-over-year CPI inflation for Canada.",
  },
  interest: {
    id: "IRSTCI01CAM156N",
    title: "Canada Interest Rate",
    sourceLabel: "FRED series IRSTCI01CAM156N",
    description: "Monthly overnight interbank rate for Canada.",
  },
  currency: {
    id: "DEXCAUS",
    title: "Canadian Dollar Value",
    sourceLabel: "FRED series DEXCAUS",
    description: "Daily exchange rate, shown as Canadian dollars per 1 U.S. dollar.",
  },
};

async function getFredApiKey() {
  if (process.env.FRED_API_KEY) {
    return process.env.FRED_API_KEY;
  }

  try {
    const envPath = path.join(process.cwd(), "app", ".env");
    const envContents = await readFile(envPath, "utf8");
    const match = envContents.match(/FRED_API_KEY="?([^"\r\n]+)"?/);

    return match?.[1] ?? "";
  } catch {
    return "";
  }
}

function getNumericObservations(observations) {
  return observations
    .filter((item) => item.value !== ".")
    .map((item) => ({
      date: item.date,
      value: Number(item.value),
    }));
}

async function fetchFredSeries(seriesId, apiKey) {
  const params = new URLSearchParams({
    series_id: seriesId,
    api_key: apiKey,
    file_type: "json",
    sort_order: "desc",
    limit: "12",
  });

  const response = await fetch(
    `https://api.stlouisfed.org/fred/series/observations?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error(`FRED request failed for ${seriesId}`);
  }

  const data = await response.json();
  const observations = getNumericObservations(data.observations ?? []);

  if (!observations.length) {
    throw new Error(`No numeric observations found for ${seriesId}`);
  }

  return {
    latest: observations[0],
    previous: observations[1] ?? null,
  };
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(`${dateString}T00:00:00`));
}

function formatPercent(value) {
  return `${value.toFixed(2)}%`;
}

function formatCurrencyRatio(value) {
  return `${value.toFixed(3)} CAD`;
}

function formatUsdPerCad(value) {
  return `${(1 / value).toFixed(3)} USD`;
}

function getDirection(latest, previous) {
  if (previous === null) {
    return "No previous data point available.";
  }

  if (latest > previous) {
    return "Higher than the previous reading.";
  }

  if (latest < previous) {
    return "Lower than the previous reading.";
  }

  return "Unchanged from the previous reading.";
}

function IndicatorCard({ title, value, secondaryValue, date, direction, description, sourceLabel }) {
  return (
    <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500">
      <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
        {title}
      </h3>
      <p className="mt-4 text-3xl font-bold text-white dark:text-white">
        {value}
      </p>
      {secondaryValue ? (
        <p className="mt-2 text-sm font-medium text-[#ede7e7] dark:text-[#d6d3d3]">
          {secondaryValue}
        </p>
      ) : null}
      <p className="mt-4 text-sm leading-6 text-[#ede7e7] dark:text-[#d6d3d3]">
        {description}
      </p>
      <p className="mt-3 text-sm font-medium text-[#ede7e7] dark:text-[#d6d3d3]">
        {direction}
      </p>
      <p className="mt-3 text-xs text-[#ede7e7] dark:text-[#d6d3d3]">
        Latest observation: {date}
      </p>
      <p className="mt-1 text-xs text-[#ede7e7] dark:text-[#d6d3d3]">
        Source: {sourceLabel}
      </p>
    </article>
  );
}

export default async function DataPage() {
  const apiKey = await getFredApiKey();

  if (!apiKey) {
    return (
      <section className="mx-auto max-w-7xl space-y-8">
        <div className="px-8 py-6 text-center">
          <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
            Live Data
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
            I could not find Data. I am experiencing issues, try again later. Add <span className="font-bold">FRED_API_KEY</span> to a root-level
            env file such as <span className="font-bold">.env.local</span>, or keep it in{" "}
            <span className="font-bold">app/.env</span> for the current fallback.
          </p>
        </div>
      </section>
    );
  }

  try {
    const [inflation, interest, currency] = await Promise.all([
      fetchFredSeries(SERIES.inflation.id, apiKey),
      fetchFredSeries(SERIES.interest.id, apiKey),
      fetchFredSeries(SERIES.currency.id, apiKey),
    ]);

    return (
      <section className="mx-auto max-w-7xl space-y-8">
        <div className="px-8 py-6 text-center">
          <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
            Live Data
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
            These indicators come from FRED (Federal Reserve Economic Data) and give a simple snapshot of the
            current Canadian economic environment. They can help you judge how
            inflation, borrowing costs, and currency moves may affect your
            plans.
          </p>
           <p className="mx-auto mt-4 max-w-2xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]"> <span className="font-bold text-red-400">Disclaimer:</span> This is not financial advise, I do not intent to tell you were to put your money in, what stocks to buy or anything crypo related. This is a guide purely to teach about the different mechanism and tools people should know about the canadian financial system.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          <IndicatorCard
            title={SERIES.inflation.title}
            value={formatPercent(inflation.latest.value)}
            date={formatDate(inflation.latest.date)}
            direction={getDirection(
              inflation.latest.value,
              inflation.previous?.value ?? null
            )}
            description={SERIES.inflation.description}
            sourceLabel={SERIES.inflation.sourceLabel}
          />

          <IndicatorCard
            title={SERIES.interest.title}
            value={formatPercent(interest.latest.value)}
            date={formatDate(interest.latest.date)}
            direction={getDirection(
              interest.latest.value,
              interest.previous?.value ?? null
            )}
            description={SERIES.interest.description}
            sourceLabel={SERIES.interest.sourceLabel}
          />

          <IndicatorCard
            title={SERIES.currency.title}
            value={`1 USD = ${formatCurrencyRatio(currency.latest.value)}`}
            secondaryValue={`1 CAD = ${formatUsdPerCad(currency.latest.value)}`}
            date={formatDate(currency.latest.date)}
            direction={getDirection(
              currency.latest.value,
              currency.previous?.value ?? null
            )}
            description={SERIES.currency.description}
            sourceLabel={SERIES.currency.sourceLabel}
          />
        </div>

        <div className="px-8 py-6 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-6 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
            FRED documents the observations endpoint at
            {" "}
            https://fred.stlouisfed.org/docs/api/fred/series_observations.html.
            The series used here are CPALTT01CAM659N for Canada CPI inflation,
            IRSTCI01CAM156N for Canada overnight interbank rates, and DEXCAUS
            for the CAD/USD exchange rate.
          </p>
        </div>
      </section>
    );
  } catch {
    return (
      <section className="mx-auto max-w-7xl space-y-8">
        <div className="px-8 py-6 text-center">
          <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
            Live Data
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
            The live FRED data could not be loaded right now. Check that the
            API key is valid and restart the Next.js dev server after changing
            env files.
          </p>
        </div>
      </section>
    );
  }
}
