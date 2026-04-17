const incomeTopics = [
  {
    title: "Income Tax",
    description:
      "Income tax is money taken from your paycheque and sent to the government. The amount depends on how much you earn and the tax rules in your province and federally. It helps pay for public services like healthcare, roads, and schools. If too much tax was taken during the year, you may get some of it back after filing your taxes.",
  },
  {
    title: "CPP (Canada Pension Plan)",
    description:
      "CPP is a required contribution taken from most workers in Canada. It helps build a pension you may receive later in retirement. The amount taken depends on your income, up to a yearly limit. Your employer usually contributes too, which is one reason this deduction matters over the long term.",
  },
  {
    title: "EI (Employment Insurance)",
    description:
      "EI is a deduction that helps fund temporary income support if you lose your job or need certain types of leave, such as parental or sickness leave. Most employees in Canada pay into it automatically through payroll. Like CPP, the amount depends on your earnings up to a yearly maximum.",
  },
  {
    title: "Employer Benefits",
    description:
      "Some employers offer benefits such as health, dental, vision, life insurance, or wellness coverage. Part of the cost may be paid by your employer, and part may come off your paycheque. These deductions can reduce your take-home pay, but they may save you money when you need medical or other support.",
  },
  {
    title: "Retirement Contributions",
    description:
      "Some workplaces offer retirement plans and deduct contributions directly from your pay. This money may go into a pension plan, group RRSP, or another employer-sponsored retirement account. In some cases, your employer also matches part of what you contribute, which can make this deduction very valuable.",
  },
  {
    title: "Union Dues",
    description:
      "If your job is part of a union, union dues may be deducted from your paycheque. These dues help pay for union operations, representation, and collective bargaining. They reduce your take-home pay slightly, but they can also support workplace protections and negotiated benefits.",
  },
];

export default function IncomePage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <div className="px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Income
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          One of the most confusing parts of a first paycheque in Canada is
          seeing that your take-home pay is lower than the amount you earned.
          That difference usually comes from payroll deductions.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Some deductions are required by law, some depend on your workplace,
          and some help support your future goals. Learning what each one means
          makes your paycheque much easier to understand.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {incomeTopics.map((topic) => (
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
      <div className="px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          The Importance of Retirement Contributions and Employer Match
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          If your employer offers retirement matching, try to contribute enough
          to get the full match whenever possible. That match is essentially
          extra money added to your retirement savings! Not taking it means
          leaving part of your compensation behind, it is free money waiting for you to take it! Even small contributions can
          grow significantly over time. 
        </p>
      </div>

    </section>
  );
}
