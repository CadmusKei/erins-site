import "./globals.css";
import { Roboto } from "next/font/google";


export const metadata = {
  title: "Erin Salo",
  description: "Personal website of Erin Salo.",
};

export const viewport = {
  themeColor: "#0c0f1b",
  colorScheme: "dark",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
