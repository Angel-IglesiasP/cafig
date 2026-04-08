export default function Home() {
  return (
    <section className="mx-auto max-w-5xl space-y-8">
      <div className=" px-8 py-10 text-center">
        <h2 className="text-3xl font-bold text-[#191919]">
          Welcome to The Canadian Financial Guide
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#2f314d]">
          Simple, clear financial guidance for Canadians, especially newcomers
          and young adults who want to build confidence with money.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-lg border border-[#2f314d] bg-white p-6">
          <h3 className="text-xl font-bold text-[#191919]">Learn</h3>
          <p className="mt-3 text-sm leading-6 text-[#2f314d]">
            Explore beginner-friendly topics like TFSA, RRSP, budgeting,
            savings, debt, and mortgages.
          </p>
        </article>

        <article className="rounded-lg border border-[#2f314d] bg-white p-6">
          <h3 className="text-xl font-bold text-[#191919]">Tools</h3>
          <p className="mt-3 text-sm leading-6 text-[#2f314d]">
            Use simple calculators to plan savings goals, understand debt, and
            make better financial decisions.
          </p>
        </article>

        <article className="rounded-lg border border-[#2f314d] bg-white p-6">
          <h3 className="text-xl font-bold text-[#191919]">Why CAFIG?</h3>
          <p className="mt-3 text-sm leading-6 text-[#2f314d]">
            No jargon. No pressure. Just practical guidance to help you
            understand your financial options in Canada.
          </p>
        </article>
      </div>
    </section>
  );
}
