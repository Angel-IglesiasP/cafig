import { TrendingUp, TrendingDown, HouseHeart  } from "lucide-react";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-8">
      <div className="px-8 py-10 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Welcome to the Tools Section
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          Here we have some handy calculators to check your future goals! 
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]"> <span className="font-bold text-red-400">Disclaimer:</span> This is not financial advise, I do not intent to tell you were to put your money in, what stocks to buy or anything crypo related. This is a guide purely to teach about the different mechanism and tools people should know about the canadian financial system.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        <Link href="/tools/savings-calculator" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500">
          <div className="flex items-center justify-center gap-2">
            <TrendingUp size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Savings Calculator
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            If I save $50 a month for 5 years how much will I get? Don't worry you can check it here! we can even calculate dividends, factor in inflation and more for you to plan your future!
          </p>
        </article>
        </Link>

         <Link href="/tools/debt-calculator" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500">
          <div className="flex items-center justify-center gap-2">
            <TrendingDown size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Debt Calculator
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            How much will it take to get out of debt if I pay a bit everytime? You can check it here. based on the interest rate, the amount owned and the time! let's help you get out of debt!
          </p>
        </article>
        </Link>

        <Link href="/tools/mortgage-calculator" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500">
          <div className="flex items-center justify-center gap-2">
            <HouseHeart size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Mortgage Calculator
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            How long is it going to take if I pay the same amount? what if I pay more? what if I renegotiate my interest rates? check it out here and let's get you closer to fully paying your mortgage!
          </p>
        </article>
        </Link>


      </div>
    </section>
  );
}
