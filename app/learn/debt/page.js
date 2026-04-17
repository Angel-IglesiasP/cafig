const debtSections = [
  {
    title: "What Is a Credit Score and Why Is It Important?",
    description:
      "A credit score is a number that helps lenders judge how reliably you have handled borrowed money in the past. In Canada, it can affect your ability to get approved for credit cards, loans, apartments, or even some phone plans. A stronger score can also help you qualify for better interest rates. Your score is influenced by things like paying on time, keeping balances low, and not applying for too much credit at once.",
  },
  {
    title: "How to Use Credit Cards Responsibly",
    description:
      "Credit cards can be useful tools if you treat them like a payment method instead of extra income. Try to pay the full balance on time, avoid spending more than you can afford, and keep your balance relatively low compared to your credit limit. Late payments and high balances can hurt your credit score and create expensive interest charges. Used carefully, a credit card can help you build healthy credit history over time.",
  },
  {
    title: "How to Eliminate Debt",
    description:
      "Paying off debt becomes easier when you follow a clear plan instead of trying to do everything at once. Two common strategies are paying off the smallest balances first for quick wins, or paying off the highest-interest debt first to save more money over time. Both methods can work well if you stay consistent and keep making at least the minimum payment on every debt.",
  },
];

const payoffMethods = [
  {
    title: "Start With the Smaller Debts First",
    description:
      "This method is often called the snowball approach. You focus extra money on the smallest debt while continuing minimum payments on everything else. Once that smallest debt is gone, you move to the next one. This can help you build momentum and stay motivated because you see progress sooner.",
  },
  {
    title: "Start With the Biggest or Highest-Cost Debt First",
    description:
      "This method is often called the avalanche approach. You focus extra money on the debt with the highest interest rate or the most expensive long-term cost while still making minimum payments on the others. It can take longer to feel the first win, but it usually saves more money overall.",
  },
];

export default function DebtPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <div className="px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Debt
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Debt can feel stressful, especially when you are still learning how
          credit works in Canada. The key is to understand what affects your
          credit, how to use borrowed money carefully, and how to build a plan
          to pay debt down over time.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {debtSections.map((section) => (
          <article
            key={section.title}
            className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500 hover:bg-[#55677f]"
          >
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              {section.title}
            </h3>
            <p className="mt-3 text-base leading-6 tracking-wide text-[#ede7e7] dark:text-[#d6d3d3]">
              {section.description}
            </p>
          </article>
        ))}
      </div>

      <div className="px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Two Common Ways to Pay Off Debt
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          There is no single perfect method for everyone. Some people stay more
          motivated by clearing small balances quickly, while others prefer to
          reduce the most expensive debt first.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        {payoffMethods.map((method) => (
          <article
            key={method.title}
            className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500 hover:bg-[#55677f]"
          >
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              {method.title}
            </h3>
            <p className="mt-3 text-base leading-6 tracking-wide text-[#ede7e7] dark:text-[#d6d3d3]">
              {method.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
