"use client";
import { useState } from "react";

export default function SavingsCalculatorPage() {
  // constant to set the initial state of amounts fields
  const [startingAmount, setStartingAmount] = useState(25);
  const [monthlyContribution, setMonthlyContribution] = useState(25);
  const [annualRate, setAnnualRate] = useState(5);
  const [years, setYears] = useState(25);

  //calculations for the savings rate %
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;
  //for the graph data
  const growthData = [{ year: 0, value: startingAmount }];

  let futureValue = startingAmount;

  for (let month = 0; month < totalMonths; month++) {
    futureValue = futureValue * (1 + monthlyRate) + monthlyContribution;

    if ((month + 1) % 12 === 0) {
      growthData.push({
        year: (month + 1) / 12,
        value: futureValue,
      });
    }
  }

  const chartWidth = 600;
  const chartHeight = 280;
  const chartPadding = 25;

  const maxValue = Math.max(...growthData.map((point) => point.value), 1);

  const xStep =
    growthData.length > 1
      ? (chartWidth - chartPadding * 2) / (growthData.length - 1)
      : 0;

  const chartPoints = growthData
    .map((point, index) => {
      const x = chartPadding + index * xStep;
      const y =
        chartHeight -
        chartPadding -
        (point.value / maxValue) * (chartHeight - chartPadding * 2);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <section className="mx-auto max-w-375 space-y-8">
      <div className="px-8 py-6 text-center">
          <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
            Savings Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
            Here you can see the power of compound interest. As an example if you start investing $25 a month for 25 years in a regular savings account that yields around 0.5% interest. you would be ending with a shocking amount of (roll drums) $7900 ! only $400 in 25 years, that is crazy. 
            However the same amount in a Higher yielding account with an average of 5% interest return would give you $14900. That is almost 19 times larger return, imagine if you put $50, $100, $200 a month! there are better ways to save money in the savings account page!
          </p>
        </div>
      <div className="mt-6 grid gap-5 xl:justify-center xl:grid-cols-[340px_560px_320px]">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Starting amount ($)
              </span>
            {/* first use state to change the starting amount */}
              <input
                type="number"
                value={startingAmount}
                onChange={(e) => setStartingAmount(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Monthly contribution ($)
              </span>
              {/* second use state to change the starting amount */}
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Annual interest rate (%)
              </span>
              {/* third use state to change the starting amount */}
              <input
                type="number"
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Years
              </span>
              {/* fouth use state to change the starting amount */}
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>
          </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr]">
          <p className="text-sm font-semibold text-[#2f314d] dark:text-[#f3ecec]">
            Estimated future value:
          </p>
          <p className="text-3xl font-bold text-[#191919] dark:text-white mr-5">
            ${futureValue.toFixed(2)}
          </p>
        </div>
        </div>

        <div className="rounded-md border border-[#2f314d] bg-[#f6f4f4] p-4 dark:border-[#aca8a8] dark:bg-[#5e5d5d]">
          <p className="text-sm font-semibold text-[#2f314d] dark:text-[#f3ecec]">
            Growth over time
          </p>

          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="mt-4 h-72 w-full"
            role="img"
            aria-label="Savings growth chart"
          >
            <line
              x1={chartPadding}
              y1={chartPadding}
              x2={chartPadding}
              y2={chartHeight - chartPadding}
              stroke="#2f314d"
              strokeWidth="2"
            />
            <line
              x1={chartPadding}
              y1={chartHeight - chartPadding}
              x2={chartWidth - chartPadding}
              y2={chartHeight - chartPadding}
              stroke="#2f314d"
              strokeWidth="2"
            />

            <polyline
              fill="none"
              stroke="#55677f"
              strokeWidth="4"
              points={chartPoints}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {growthData.map((point, index) => {
              const x = chartPadding + index * xStep;
              const y =
                chartHeight -
                chartPadding -
                (point.value / maxValue) * (chartHeight - chartPadding * 2);

              return (
                <g key={point.year}>
                  <circle cx={x} cy={y} r="4" fill="#2f314d" />
                  {(years <= 35 || point.year % 5 === 0 || point.year === 0 || point.year === years) && (
                    <text
                      x={x}
                      y={chartHeight - 10}
                      textAnchor="middle"
                      fontSize="11"
                      fill="text-blue-500 dark:text-blue-200"
                    >
                      {point.year}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className="rounded-md border border-[#2f314d] bg-[#f6f4f4] p-4 dark:border-[#aca8a8] dark:bg-[#5e5d5d]">
          <p className="text-sm font-semibold text-[#2f314d] dark:text-[#f3ecec]">
            Yearly amounts (notice how each year the interest adds more value)
          </p>

          <div className="mt-4 max-h-72 space-y-2 overflow-y-auto">
            {growthData.map((point) => (
              (() => {
                const investedAmount =
                  startingAmount + monthlyContribution * point.year * 12;
                const interestEarned = point.value - investedAmount;

                return (
                  <div
                    key={point.year}
                    className="rounded-md border border-[#2f314d] bg-white px-3 py-2 dark:border-[#aca8a8] dark:bg-[#888787]"
                  >
                    <p className="text-sm font-bold text-[#191919] dark:text-white">
                      Year {point.year}: ${point.value.toFixed(2)}
                    </p>
                    <p className="mt-1 text-xs text-[#2f314d] dark:text-[#f3ecec]">
                      (${investedAmount.toFixed(2)} invested + $
                      {interestEarned.toFixed(2)} <span className="font-bold text-blue-500 dark:text-blue-200">interest earned </span>)
                    </p>
                  </div>
                );
              })()
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
