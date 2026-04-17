"use client";

import { useState } from "react";

const accountTypes = [
  {
    title: "Regular Savings Account",
    description:
      "A regular savings account is a basic account offered by banks to store money safely. It usually earns a very low interest rate, so your money does not grow much. You can deposit and withdraw money at any time without restrictions. There is little to no risk because your money is protected by the bank. It is best used for short-term savings or holding money temporarily. Many people use it alongside a chequing account for everyday banking. However, it is not ideal for long-term savings due to low growth.",
  },
  {
    title: "HISA (High Interest Savings Account)",
    description:
      "similar to a regular savings account but offers a higher interest rate. This means your money grows faster while still remaining safe and accessible. Most HISAs are offered by online banks or special accounts from major banks. You can usually withdraw your money at any time without penalties. It is a popular choice for emergency funds or short-term goals. Interest rates can change depending on the market. It is one of the best low-risk ways to grow savings slightly over time.",
  },
  {
    title: "TFSA (Tax-Free Savings Account)",
    description:
      "A TFSA is a Canadian account where your money can grow tax-free. You can contribute money every year up to a government limit. Any interest or investment growth inside the account is not taxed. You can withdraw money at any time without paying taxes. Withdrawn amounts can be re-contributed in future years. It can hold savings or investments, making it very flexible. It is one of the best tools for long-term savings and growth.",
  },
  {
    title: "FHSA (First Home Savings Account)",
    description:
      "The FHSA is designed to help first-time home buyers save for a house. Contributions to this account reduce your taxable income, like an RRSP. When used to buy a home, withdrawals are completely tax-free, like a TFSA. There are yearly and lifetime contribution limits. You must meet certain conditions to qualify as a first-time buyer. The account can be used for a limited number of years. It combines tax benefits to help you reach a home down payment faster.",
  },
  {
    title: "RRSP (Registered Retirement Savings Plan)",
    description:
      "A retirement savings account in Canada. When you contribute, you reduce your taxable income for that year. This can result in a tax refund or lower taxes owed. Your money grows tax-free while it stays in the account. You pay taxes later when you withdraw the money in retirement. It is meant for long-term savings, not frequent withdrawals. It is a powerful tool for building retirement income over time.",
  },
  {
    title: "GIC (Guaranteed Investment Certificate)",
    description:
      "a safe investment where you lock your money for a fixed period. In return, the bank guarantees a fixed interest rate. This means you know exactly how much you will earn in advance. The term can range from a few months to several years. You usually cannot withdraw your money until the term ends. It is very low risk because your return is guaranteed. It is a good option for stable, predictable savings.",
  },
];

export default function SavingsPage() {
  const [startingAmount, setStartingAmount] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [annualRate, setAnnualRate] = useState(5);
  const [years, setYears] = useState(10);

  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;

  let futureValue = startingAmount;
  const growthData = [{ year: 0, value: startingAmount }];

  for (let month = 0; month < totalMonths; month++) {
    futureValue = futureValue * (1 + monthlyRate) + monthlyContribution;

    if ((month + 1) % 12 === 0) {
      growthData.push({
        year: (month + 1) / 12,
        value: futureValue,
      });
    }
  }

  const chartWidth = 520;
  const chartHeight = 280;
  const chartPadding = 32;
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
    <section className="mx-auto max-w-7xl space-y-8">
      <div className="px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Savings Accounts
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Not all savings options work the same way. Some are better for
          emergencies, some help with taxes, and some are meant for long-term
          goals like retirement, education, or buying a first home.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Generally speaking the must have are TFSA, FHSA and RRSP. Starting first with the TFSA as it gives you the flexibility of withdraw your savings at any time in case you needed. FHSA will give you a good headstart if you are planning to get a property in the future, with the nice added bonus of helping you reduce your taxes. And lastly for the long run you have your RRSP that you can leave growing for years with the help of <span className="font-bold text-red-400">Compound growth</span>. What is Compound growth? scroll down to find out!
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {accountTypes.map((account) => (
          <article
            key={account.title}
            className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500 hover:bg-[#55677f]"
          >
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              {account.title}
            </h3>
            <p className="mt-3 text-base leading-6 tracking-wide text-[#ede7e7] dark:text-[#d6d3d3]">
              {account.description}
            </p>
          </article>
        ))}
      </div>

      <div className="px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Compound Growth
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Compound growth is when your money grows not only from what you put in, but also from the interest your money has already earned. In other words, you start earning interest on your interest, not just on your original amount.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          At the beginning, the growth may look slow, but over time it starts to increase much faster. The longer your money stays invested or saved, the more powerful compounding becomes.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Even small contributions can grow significantly if given enough time. This is why starting early is more important than investing large amounts later. Compound growth is one of the main reasons people build wealth over time. Like that one episode of futurama! check it out <a href="https://www.youtube.com/watch?v=6JwkaLt9pf8" className="font-bold text-blue-400">here!</a> 
        </p>
      </div>

      <div className="rounded-lg border-2 border-[#2f314d] bg-white p-6 dark:border-[#aca8a8] dark:bg-gray-600">
        <h3 className="text-2xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Compound Growth Calculator
        </h3>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="space-y-4">
            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Starting amount
              </span>
              <input
                type="number"
                value={startingAmount}
                onChange={(e) => setStartingAmount(Number(e.target.value))}
                className="w-full rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Monthly contribution
              </span>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Annual interest rate (%)
              </span>
              <input
                type="number"
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="w-full rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-2">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Years
              </span>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <div className="rounded-md bg-[#e5e4e4] p-4 dark:bg-[#888787]">
              <p className="text-sm text-[#2f314d] dark:text-[#f3ecec]">
                Estimated future value
              </p>
              <p className="text-3xl font-bold text-[#191919] dark:text-white">
                ${futureValue.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="rounded-md border border-[#2f314d] bg-[#f6f4f4] p-4 dark:border-[#aca8a8] dark:bg-[#5e5d5d]">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-[#2f314d] dark:text-[#f3ecec]">
                Growth over time
              </p>
              <p className="text-xs text-[#2f314d] dark:text-[#f3ecec]">
                Year 0 to Year {years}
              </p>
            </div>

            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-72 w-full"
              role="img"
              aria-label="Compound growth chart"
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

              {[0.25, 0.5, 0.75, 1].map((ratio) => {
                const y =
                  chartHeight -
                  chartPadding -
                  ratio * (chartHeight - chartPadding * 2);

                return (
                  <line
                    key={ratio}
                    x1={chartPadding}
                    y1={y}
                    x2={chartWidth - chartPadding}
                    y2={y}
                    stroke="#b7b9c4"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                );
              })}

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
                    <text
                      x={x}
                      y={chartHeight - 10}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#2f314d"
                    >
                      {point.year}
                    </text>
                  </g>
                );
              })}
            </svg>

            <p className="mt-3 text-sm text-[#2f314d] dark:text-[#f3ecec]">
              The line shows the projected balance at the end of each year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
