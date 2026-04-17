"use client";

import { useState } from "react";

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000);
  const [annualRate, setAnnualRate] = useState(5.25);
  const [amortizationYears, setAmortizationYears] = useState(25);

  const mortgageAmount = Math.max(homePrice - downPayment, 0);
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = Math.max(Math.round(amortizationYears * 12), 1);

  const monthlyPayment =
    monthlyRate === 0
      ? mortgageAmount / totalMonths
      : (mortgageAmount *
          (monthlyRate * (1 + monthlyRate) ** totalMonths)) /
        ((1 + monthlyRate) ** totalMonths - 1);

  let remainingBalance = mortgageAmount;
  const balanceData = [{ year: 0, value: remainingBalance }];
  const yearlyBreakdown = [
    {
      year: 0,
      balance: remainingBalance,
      paidToPrincipal: 0,
      paidToInterest: 0,
    },
  ];

  for (let year = 1; year <= Math.ceil(amortizationYears); year++) {
    let principalPaidThisYear = 0;
    let interestPaidThisYear = 0;

    for (let month = 0; month < 12; month++) {
      if (remainingBalance <= 0) {
        break;
      }

      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = Math.min(
        monthlyPayment - interestPayment,
        remainingBalance
      );

      interestPaidThisYear += interestPayment;
      principalPaidThisYear += principalPayment;
      remainingBalance = Math.max(remainingBalance - principalPayment, 0);
    }

    balanceData.push({
      year,
      value: remainingBalance,
    });

    yearlyBreakdown.push({
      year,
      balance: remainingBalance,
      paidToPrincipal: principalPaidThisYear,
      paidToInterest: interestPaidThisYear,
    });

    if (remainingBalance <= 0) {
      break;
    }
  }

  const chartWidth = 600;
  const chartHeight = 280;
  const chartPadding = 25;
  const maxValue = Math.max(...balanceData.map((point) => point.value), 1);

  const xStep =
    balanceData.length > 1
      ? (chartWidth - chartPadding * 2) / (balanceData.length - 1)
      : 0;

  const chartPoints = balanceData
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
          Mortgage Calculator
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Use this calculator to estimate your monthly mortgage payment and see
          how the balance decreases over time as you pay principal and interest.
        </p>
      </div>

      <div className="mt-6 grid gap-5 xl:justify-center xl:grid-cols-[340px_560px_320px]">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Home price ($)
              </span>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Down payment ($)
              </span>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Interest rate (%)
              </span>
              <input
                type="number"
                step="0.01"
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Amortization (years)
              </span>
              <input
                type="number"
                value={amortizationYears}
                onChange={(e) => setAmortizationYears(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>
          </div>

          <div className="mt-6 rounded-md bg-[#e5e4e4] p-4 dark:bg-[#888787]">
            <p className="text-sm font-semibold text-[#2f314d] dark:text-[#f3ecec]">
              Estimated monthly payment
            </p>
            <p className="text-3xl font-bold text-[#191919] dark:text-white">
              ${monthlyPayment.toFixed(2)}
            </p>
            <p className="mt-2 text-sm text-[#2f314d] dark:text-[#f3ecec]">
              Mortgage amount: ${mortgageAmount.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="rounded-md border border-[#2f314d] bg-[#f6f4f4] p-4 dark:border-[#aca8a8] dark:bg-[#5e5d5d]">
          <p className="text-sm font-semibold text-[#2f314d] dark:text-[#f3ecec]">
            Remaining balance over time
          </p>

          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="mt-4 h-72 w-full"
            role="img"
            aria-label="Mortgage balance chart"
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

            {balanceData.map((point, index) => {
              const x = chartPadding + index * xStep;
              const y =
                chartHeight -
                chartPadding -
                (point.value / maxValue) * (chartHeight - chartPadding * 2);

              return (
                <g key={point.year}>
                  <circle cx={x} cy={y} r="4" fill="#2f314d" />
                  {(amortizationYears <= 30 ||
                    point.year % 5 === 0 ||
                    point.year === 0 ||
                    point.year === Math.ceil(amortizationYears)) && (
                    <text
                      x={x}
                      y={chartHeight - 10}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#2f314d"
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
            Yearly mortgage breakdown
          </p>

          <div className="mt-4 max-h-72 space-y-2 overflow-y-auto">
            {yearlyBreakdown.map((item) => (
              <div
                key={item.year}
                className="rounded-md border border-[#2f314d] bg-white px-3 py-2 dark:border-[#aca8a8] dark:bg-[#888787]"
              >
                <p className="text-sm font-bold text-[#191919] dark:text-white">
                  Year {item.year}: ${item.balance.toFixed(2)} remaining
                </p>
                {item.year > 0 && (
                  <p className="mt-1 text-xs text-[#2f314d] dark:text-[#f3ecec]">
                    (${item.paidToPrincipal.toFixed(2)} principal + $
                    {item.paidToInterest.toFixed(2)} interest paid)
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
