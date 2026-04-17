const taxTopics = [
  {
    title: "How Taxes Work",
    description:
      "Taxes are money collected by the government to help pay for public services like healthcare, schools, roads, and other programs. In Canada, taxes can be charged by both the federal government and your province. Some taxes are taken directly from your paycheque, while others are paid through purchases or when you file your tax return.",
  },
  {
    title: "Taxable Income",
    description:
      "Taxable income is the portion of your income that the government uses to calculate how much income tax you owe. It usually starts with your total earnings and then may be reduced by certain deductions, such as RRSP contributions or union dues. Lower taxable income can mean lower taxes.",
  },
  {
    title: "Tax Brackets",
    description:
      "Canada uses a progressive tax system, which means different parts of your income are taxed at different rates. Moving into a higher tax bracket does not mean your entire income is taxed at that higher rate. Only the portion that falls into the higher bracket gets taxed more. This is a common point of confusion for many people.",
  },
  {
    title: "Paycheque Taxes",
    description:
      "Taxes are often taken from your pay before you even receive it. This includes income tax and sometimes other payroll deductions such as CPP and EI. That is why your take-home pay is lower than your gross pay. You can read more about payroll deductions in the Income section.",
  },
  {
    title: "Tax Return",
    description:
      "A tax return is the form you submit each year to report your income, deductions, and credits. After filing, you may owe more tax or receive money back if too much was deducted during the year. Common ways to improve your result include claiming eligible credits, tracking deductions, and contributing to accounts such as an RRSP when appropriate.",
  },
  {
    title: "What Is a T4?",
    description:
      "A T4 is a tax slip that shows how much employment income you earned in a year and how much tax was already deducted from your pay. Employers usually provide it before tax season. You use the information on your T4 when filing your tax return.",
  },
];

export default function TaxesPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <div className="px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Taxes
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Taxes can feel confusing at first, especially when you are dealing
          with slips, deductions, brackets, and annual filing deadlines. The
          goal here is to make the basic ideas easier to understand before you
          get into the details.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {taxTopics.map((topic) => (
          <article
            key={topic.title}
            className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500 hover:bg-[#55677f]"
          >
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              {topic.title}
            </h3>
            <p className="mt-3 text-base leading-6 tracking-wide text-[#ede7e7] dark:text-[#d6d3d3]">
              {topic.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
