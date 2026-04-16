import { PiggyBank, BanknoteArrowDown, BanknoteArrowUp, HandCoins  } from "lucide-react";
import Link from "next/link";

export default function LearnPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <div className="px-8 py-10 text-center">
        <h2 className="text-3xl font-bold text-[#191919] dark:text-[#d6d3d3]">
          Welcome to the Learning Section
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]">
          I will explain some common terms and types of tools normally associate it with canadian financial products. This will help you understand what type of tools you have and the one that you might want to use in the future.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 font-medium text-[#2f314d] dark:text-[#d6d3d3]"> <span className="font-bold text-red-400">Disclaimer:</span> This is not financial advise, I do not intent to tell you were to put your money in, what stocks to buy or anything crypo related. This is a guide purely to teach about the different mechanism and tools people should know about the canadian financial system.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-4">
        <Link href="/learn/savings-accounts" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500">
          <div className="flex items-center justify-center gap-2">
            <PiggyBank size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Savings Accounts
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            Understand the difference between a classic savings account, HISA, TFSA, FHSA, RRSP, RESP, GIC and find the right fit for your finantial goals. You might find you could be saving more!
          </p>
        </article>
        </Link>

        <Link href="/learn/income" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500">
          <div className="flex items-center justify-center gap-2">
            <BanknoteArrowDown size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Income
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            Why my paycheque says I earned $1500 but I only received $1200? Understand what type of deductions you might encunter in your paycheques and how to make the best use of them.
          </p>
        </article>
        </Link>

         <Link href="/learn/debt" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500">
          <div className="flex items-center justify-center gap-2">
            <BanknoteArrowUp size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Debt
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            Debt and credit cards can be scary! Understand how to manage credit cards wisely and use it in you favor to get a healthy credit score, as well and how to manage debt and clear it little by little.
          </p>
        </article>
        </Link>

        <Link href="/learn/taxes" className="block">
        <article className="rounded-lg border-2 border-[#2f314d] bg-[#888787] p-6 text-center dark:border-[#aca8a8] dark:bg-gray-500">
          <div className="flex items-center justify-center gap-2">
            <HandCoins size={30} className="text-[#ede7e7] dark:text-[#d6d3d3]" />
            <h3 className="text-xl font-bold text-[#ede7e7] dark:text-[#d6d3d3]">
              Taxes
            </h3>
          </div>
          <p className="mt-3 text-base leading-6 tracking-wider text-[#ede7e7] dark:text-[#d6d3d3]">
            What are taxes? what is a T4? tax deductions? tax returns? Tax seasson could be a headache. We will try to break it down into chunks and hopefully makes it less confusing.
          </p>
        </article>
        </Link>
      </div>
    </section>
  );
}
