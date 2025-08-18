import "./globals.css";
// import "remixicon/fonts/remixicon.css";
import Header from "../components/Header";

export const metadata = {
  title: "Frontend Assignment",
  description: "Frontend Developer Task - Whatbytes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main className="pt-0">{children}</main>
      </body>
    </html>
  );
}
