import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Fonts

import { Caveat, Jost } from "next/font/google";


// Themes Provider
import { ThemeProvider } from "@/components/ThemeProvider";


const jost = Jost({
  weight: ['100', '200', '400', '600', '700', '800'],
  subsets: ['latin']
});

const caveat = Caveat({
  weight: ['400', '500'],
  subsets: ['latin']
})


export const metadata = {
  title: "Alexis Vacilli",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jost.className}>
        <ThemeProvider attribute='class' defaultThemes='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
