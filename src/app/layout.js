import "./globals.css"

export const metadata = {
  title: "Meu site",
  description: "Convertido para Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>

        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </head>

      <body>{children}</body>
    </html>
  );
}
