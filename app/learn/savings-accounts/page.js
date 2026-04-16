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
    </section>
  );
}
