import "./globals.css";
import AppLoader from "@/components/AppLoader";

export const metadata = {
  title: "Standard Pile Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body">
        <AppLoader>{children}</AppLoader>
      </body>
    </html>
  );
}
