import Navbar from "@/components/Navigation/Navbar";
import "./globals.css";
import AppFooter from "@/components/Navigation/AppFooter";

export const metadata = {
  title: "Activate | Blog",
  description: "Pagina de noticias y abordaje de Activate!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          }}
        />
      </head>
      <body>
        <main className="dark:bg-boxdark-2 dark:text-bodydark text-slate-500">
          <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
              <Navbar />
              <div className="flex-grow w-full">{children}</div>
              <AppFooter />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
