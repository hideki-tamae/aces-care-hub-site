import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ACEs Japan Care HUB🇯🇵 - ACEs×ヤングケアラー ケアプラットフォーム",
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
