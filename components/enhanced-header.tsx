"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import Link from "next/link"

interface EnhancedHeaderProps {
  onChatbotOpen: () => void
}

export function EnhancedHeader({ onChatbotOpen }: EnhancedHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-blue-100/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                ACEs Japan Care HUB 🇯🇵
              </h1>
              <p className="text-sm text-gray-600 font-medium tracking-wide">
                ACEs×ヤングケアラー 統合ケアプラットフォーム
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              理念・ビジョン
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              サービス
            </a>
            <a href="#founder" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              代表について
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              お客様の声
            </a>
            <Link href="/donation" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              寄付・サポーター
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent font-medium"
              onClick={onChatbotOpen}
            >
              AI相談
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 hover:from-blue-600 hover:via-purple-600 hover:to-green-600 shadow-lg font-medium"
              onClick={() =>
                (window.location.href =
                  "mailto:tamatixyan@gmail.com?subject=無料相談のお問い合わせ&body=お名前：%0D%0A%0D%0Aご相談内容：%0D%0A%0D%0A連絡先：%0D%0A")
              }
            >
              無料相談
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                理念・ビジョン
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                サービス
              </a>
              <a href="#founder" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                代表について
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                お客様の声
              </a>
              <Link href="/donation" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                寄付・サポーター
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
                  onClick={onChatbotOpen}
                >
                  AI相談
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                  onClick={() =>
                    (window.location.href =
                      "mailto:tamatixyan@gmail.com?subject=無料相談のお問い合わせ&body=お名前：%0D%0A%0D%0Aご相談内容：%0D%0A%0D%0A連絡先：%0D%0A")
                  }
                >
                  無料相談
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
