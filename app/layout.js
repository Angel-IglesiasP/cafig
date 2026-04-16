import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { House, BookOpen, Calculator, CircleHelp } from "lucide-react";

export const metadata = {
  title: "CAFIG",
  description: "The Canadian Financial Guide",
};

const navItems = [
  { name: "Home", href: "/", icon: House },
  { name: "Learn", href: "/learn", icon: BookOpen },
  { name: "Tools", href: "/tools", icon: Calculator },
  { name: "About", href: "/about", icon: CircleHelp },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff] text-[#000000]">
        <div className="grid min-h-screen grid-rows-[auto_1fr]">
          <header className="border-b border-b-[#2f314d] dark:border-b-[#919191] bg-[#aca8a8] dark:bg-[#454242]">
            <Link href="/" className="inline-block px-6 py-6 -mb-5">
              <div className="flex items-center gap-1.5">
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
            <aside className="w-49 border-r border-r-[#2c2d3c] dark:border-r-[#aca8a8] bg-[#aca8a8] dark:bg-[#454242] p-4">
              <nav className="space-y-4 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-bold tracking-[5] text-[#191919] dark:text-[#f3ecec] hover:bg-slate-100 dark:hover:text-[#191919]"
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
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
