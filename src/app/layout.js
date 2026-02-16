// src/app/layout.js
import "./globals.css";



export const metadata = {
  title: "Thabata Santos | Cloud & Infrastructure",
  description: "Cloud portfolio - AWS, IaC, networking and scalable systems.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
</head>
  <body>{children}</body>
</html>
  );
}
