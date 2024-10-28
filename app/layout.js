"use client";
import localFont from "next/font/local";
import Head from 'next/head';
import "./globals.css";
import { AuthProvider } from "./context/authContext";
import NavBar from "./components/NavBar";
import EcoFooter from "./components/EcoFooter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>EcoSwap</title>
        <meta name="description" content="EcoSwap - Platform online untuk produsen dan pengelola sampah"></meta>

        {/* favicon */}
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        {/* icon */}
        <script src="https://kit.fontawesome.com/091b217840.js" crossorigin="anonymous"></script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <NavBar />
          {children}
          <EcoFooter />
        </AuthProvider>
      </body>
    </html>
  );
}
