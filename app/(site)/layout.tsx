import "./globals.css";
import styles from "./layout.module.css";
import { Noto_Sans } from 'next/font/google';
import { Header } from '../../components/Header/Header';
import { Footer } from "@/components/Footer/Footer";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Suspense } from "react";
import Up from "@/components/Up/Up";
import Menu from "@/components/Menu/Menu";
 
const noto_sans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ['cyrillic'],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru-RU">
      <body className={noto_sans.className}>
        <div className={styles.wrapper}>
          <Header>
            <Menu />
          </Header>
          <Suspense fallback={<p>Loading menu</p>}>
            <Sidebar/>
          </Suspense>
          <main className={styles.body} role="main">{children}</main>
          <Footer/>
        </div>
        <Up />
      </body>
    </html>
  );
}
