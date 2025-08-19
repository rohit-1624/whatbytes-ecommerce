import "./globals.css";
import { Providers } from "../redux/Providers";
import Header from "../components/Header";

export const metadata = {
  title: "Frontend Assignment",
  description: "Frontend Developer Task - Whatbytes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
