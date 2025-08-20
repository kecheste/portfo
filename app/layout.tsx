import type React from "react"
import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "kecheste - Software Developer",
  description:
    "Portfolio of kecheste, a passionate software developer specializing in Rust, TypeScript, Dart, and Python. Crafting elegant solutions through code and music.",
  keywords: ["kecheste", "software developer", "rust", "typescript", "dart", "python", "portfolio", "programming"],
  authors: [{ name: "kecheste" }],
  creator: "kecheste",
  openGraph: {
    title: "kecheste - Software Developer",
    description:
      "Portfolio of kecheste, a passionate software developer specializing in Rust, TypeScript, Dart, and Python.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "kecheste - Software Developer",
    description:
      "Portfolio of kecheste, a passionate software developer specializing in Rust, TypeScript, Dart, and Python.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  )
}
