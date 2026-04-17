"use client";

import { useState } from "react";

export default function DebtCalculatorPage() {
  const [debtAmount, setDebtAmount] = useState(10000);
  const [annualRate, setAnnualRate] = useState(19.99);
  const [monthlyPayment, setMonthlyPayment] = useState(300);
  const [extraPayment, setExtraPayment] = useState(0);

  const monthlyRate = annualRate / 100 / 12;
  const totalPaymentPerMonth = monthlyPayment + extraPayment;

  let remainingBalance = debtAmount;
  let totalInterestPaid = 0;
  let payoffMonths = 0;
  const balanceData = [{ year: 0, value: remainingBalance }];
  const yearlyBreakdown = [
    {
      year: 0,
      balance: remainingBalance,
      principalPaid: 0,
      interestPaid: 0,
    },
  ];

  if (remainingBalance > 0 && totalPaymentPerMonth > remainingBalance * monthlyRate) {
    while (remainingBalance > 0 && payoffMonths < 1200) {
      let principalPaidThisYear = 0;
      let interestPaidThisYear = 0;

      for (let month = 0; month < 12; month++) {
        if (remainingBalance <= 0) {
          break;
        }

        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = Math.min(
          totalPaymentPerMonth - interestPayment,
          remainingBalance
        );

        totalInterestPaid += interestPayment;
        interestPaidThisYear += interestPayment;
        principalPaidThisYear += principalPayment;
        remainingBalance = Math.max(remainingBalance - principalPayment, 0);
        payoffMonths += 1;
      }

      const currentYear = yearlyBreakdown.length;
      balanceData.push({
        year: currentYear,
        value: remainingBalance,
      });

      yearlyBreakdown.push({
        year: currentYear,
        balance: remainingBalance,
        principalPaid: principalPaidThisYear,
        interestPaid: interestPaidThisYear,
      });
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

  const payoffYears = payoffMonths / 12;

  return (
    <section className="mx-auto max-w-375 space-y-8">
      <div className="px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Debt Calculator
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Estimate how long it may take to clear your debt and see how much of
          your payment goes toward interest versus the actual balance.
        </p>
      </div>

      <div className="mt-6 grid gap-5 xl:justify-center xl:grid-cols-[340px_560px_320px]">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Total debt ($)
              </span>
              <input
                type="number"
                value={debtAmount}
                onChange={(e) => setDebtAmount(Number(e.target.value))}
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
                Monthly payment ($)
              </span>
              <input
                type="number"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>

            <label className="space-y-4">
              <span className="block text-sm font-semibold text-[#2f314d] dark:text-[#d6d3d3]">
                Extra payment ($)
              </span>
              <input
                type="number"
                value={extraPayment}
                onChange={(e) => setExtraPayment(Number(e.target.value))}
                className="w-38 rounded-md border border-[#2f314d] bg-white px-3 py-2 text-[#191919]"
              />
            </label>
          </div>

          <div className="mt-6 rounded-md bg-[#e5e4e4] p-4 dark:bg-[#888787]">
            <p className="text-sm font-semibold text-[#2f314d] dark:text-[#f3ecec]">
              Estimated payoff time
            </p>
            <p className="text-3xl font-bold text-[#191919] dark:text-white">
              {totalPaymentPerMonth > debtAmount * monthlyRate && payoffMonths > 0
                ? `${payoffYears.toFixed(1)} years`
                : "Payment too low"}
            </p>
            <p className="mt-2 text-sm text-[#2f314d] dark:text-[#f3ecec]">
              Total interest paid: ${totalInterestPaid.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="rounded-md border border-[#2f314d] bg-[#f6f4f4] p-4 dark:border-[#aca8a8] dark:bg-[#5e5d5d]">
          <p className="text-sm font-semibold text-[#2f314d] dark:text-[#f3ecec]">
            Debt balance over time
          </p>

          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="mt-4 h-72 w-full"
            role="img"
            aria-label="Debt payoff chart"
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
                  {(balanceData.length <= 12 ||
                    point.year % 2 === 0 ||
                    point.year === 0 ||
                    index === balanceData.length - 1) && (
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
            Yearly debt breakdown
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
                    (${item.principalPaid.toFixed(2)} paid to debt + $
                    {item.interestPaid.toFixed(2)} interest paid)
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
