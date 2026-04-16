import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { House, BookOpen, Calculator, CircleHelp, ChartColumnIcon } from "lucide-react";

export const metadata = {
  title: "CAFIG",
  description: "The Canadian Financial Guide",
};

const navItems = [
  { name: "Home", href: "/", icon: House },
  {
    name: "Learn",
    href: "/learn",
    icon: BookOpen,
    children: [
      { name: "Savings Accounts", href: "/learn/savings-accounts" },
      { name: "Income", href: "/learn/income" },
      { name: "Debt", href: "/learn/debt" },
      { name: "Taxes", href: "/learn/taxes" },
    ],
  },
  {
  name: "Tools",
  href: "/tools",
  icon: Calculator,
  children: [
    { name: "Savings Calculator", href: "/tools/savings-calculator" },
    { name: "Mortgage Calculator", href: "/tools/mortgage-calculator" },
    { name: "Debt Calculator", href: "/tools/debt-calculator" },
  ],
},

  { name: "Live Data", href: "/liveData", icon: ChartColumnIcon },
  { name: "About", href: "/about", icon: CircleHelp },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff] text-[#000000]">
        <div className="grid min-h-screen grid-rows-[auto_1fr]">
          <header className="border-b border-b-[#2f314d] dark:border-b-[#919191] bg-[#aca8a8] dark:bg-[#454242]">
            <Link href="/" className="inline-block px-6 py-6 -mb-4 ">
              <div className="flex items-center gap-1.5 ">
              <h1 className="text-3xl font-bold tracking-[.21em] text-[#191919] dark:text-[#f3ecec]">CAFIG</h1>
                <Image
                  src="/CAFIGlogo.png"
                  alt="CAFIG logo"
                  width={45}
                  height={45}
                  priority
                  className="relative -top-2.5"
                />
              </div>
              <p className="text-sm font-bold text-[#191919] dark:text-[#f3ecec] relative -top-1.5">
                Canadian Financial Guide
              </p>
            </Link>
          </header>

          <div className="flex">
            <aside className="w-56 border-r border-r-[#2c2d3c] dark:border-r-[#aca8a8] bg-[#aca8a8] dark:bg-[#454242] p-4">
              <nav className="mt-8 space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.name} className="space-y-2">
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-bold tracking-[5] text-[#191919] hover:bg-slate-100 dark:text-[#f3ecec] dark:hover:text-[#191919]"
                      >
                        <Icon size={18} />
                        <span>{item.name}</span>
                      </Link>

                      {item.children && (
                        <div className="ml-9 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block rounded-md px-3 py-1 text-[14px] font-medium text-[#2f314d] hover:bg-slate-100 dark:text-[#d6d3d3] dark:hover:text-[#191919]"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

            </aside>

            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
