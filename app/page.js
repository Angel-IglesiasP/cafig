import { BookOpen, Calculator, ChartColumnIcon, CircleHelp,  } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <div className="px-8 py-10 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Welcome to The Canadian Financial Guide (CAFIG for short)
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Simple, clear financial guidance for Canadians, especially newcomers
          and young adults who want to build confidence with money, made from
          the things I wish I knew when I moved to Canada.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]"> <span className="font-bold text-red-400">Disclaimer:</span> This is not financial advise, I do not intent to tell you were to put your money in, what stocks to buy or anything crypo related. This is a guide purely to teach about the different mechanism and tools people should know about the canadian financial system.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-4">
        <Link href="/learn" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500 h-60">
          <div className="flex items-center justify-center gap-2">
            <BookOpen size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Learn
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            Explore beginner-friendly topics like savings accounts such as TFSA,
            FHSA, and RRSP, plus budgeting, debt, mortgages, taxes, and more.
          </p>
        </article>
        </Link>

        <Link href="/tools" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500 h-60">
          <div className="flex items-center justify-center gap-2">
            <Calculator size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Tools
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            Use simple calculators to plan savings goals, understand debt, and
            make better financial decisions. Use them to help you visualize your objectives!
          </p>
        </article>
        </Link>

         <Link href="/liveData" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500 h-60">
          <div className="flex items-center justify-center gap-2">
            <ChartColumnIcon size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Live Data
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            Check the latest data from trusted finantial sources about inflation, interest rates, and more. Use this data to check your plans against real world metrics.
          </p>
        </article>
        </Link>

        <Link href="/about" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500 h-60">
          <div className="flex items-center justify-center gap-2">
            <CircleHelp size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Why CAFIG?
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            No complex words. No pressure. Just practical guidance to help you
            understand your financial options in Canada and figure out the best
            way to set your goals.
          </p>
        </article>
        </Link>
      </div>
    </section>
  );
}
