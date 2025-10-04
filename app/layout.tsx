import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ACEs Care HUB JAPAN - ACEs×ヤングケアラー ケアプラットフォーム",
  description: "ACEs×ヤングケアラーが安心してつながり語り合い回復できる社会をつくる",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Script src="/config-loader.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  )
}
