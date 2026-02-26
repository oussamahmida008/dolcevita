import "./globals.css";

export const metadata = {
  title: "Dolce Vita | Menu",
  description: "Savourez la Dolce Vita - Menu Premium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
