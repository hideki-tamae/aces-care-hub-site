"use client"

import type React from "react"
import { EnhancedAIChatbot } from "@/components/enhanced-ai-chatbot"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, MessageCircle, CreditCard, Shield, Users } from "lucide-react"
import Link from "next/link"

interface FAQItem {
  id: number
  category: string
  question: string
  answer: string
  icon: React.ReactNode
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [chatbotOpen, setChatbotOpen] = useState(false)

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const faqData: FAQItem[] = [
    {
      id: 1,
      category: "サービス全般",
      question: "ACEs Japan Care HUBとは何ですか？",
      answer:
        "ACEs（逆境の子供期体験）やヤングケアラーとしての背景をもつ人々が、安心してつながり、語り合い、回復できる場を提供するプラットフォームです。AIを活用したケアシステムや、トラウマインフォームドケアに基づいたサポートを提供しています。",
      icon: <HelpCircle className="w-5 h-5 text-blue-500" />,
    },
    {
      id: 2,
      category: "サービス全般",
      question: "サービス開始までの流れを教えてください。",
      answer:
        "1. プラン選択：ご希望のプランをお選びください。2. オンライン登録：必要事項をご入力いただきます。3. 決済手続き：クレジットカードまたは銀行振込で決済を行います。4. 初期セットアップ：専任スタッフがサポートいたします。5. サービス開始：感情ログの記録やAIケアがスタートします。",
      icon: <MessageCircle className="w-5 h-5 text-green-500" />,
    },
    {
      id: 3,
      category: "料金・支払い",
      question: "どのような支払い方法がありますか？",
      answer:
        "クレジットカード（Visa, MasterCard, JCB, Amex）、PayPay決済、銀行振込をご利用いただけます。銀行振込の場合は、入金確認後にサービスを開始いたします。",
      icon: <CreditCard className="w-5 h-5 text-purple-500" />,
    },
    {
      id: 4,
      category: "料金・支払い",
      question: "プランの変更はできますか？",
      answer:
        "はい、いつでもプランの変更が可能です。上位プランへの変更は即座に反映され、下位プランへの変更は次回更新日から適用されます。詳細はサポートまでお問い合わせください。",
      icon: <CreditCard className="w-5 h-5 text-purple-500" />,
    },
    {
      id: 5,
      category: "プライバシー・セキュリティ",
      question: "個人情報はどのように保護されていますか？",
      answer:
        "SSL暗号化通信、アクセス制限、定期的なセキュリティ監査など、多層的なセキュリティ対策を実施しています。また、トラウマインフォームドケアの観点から、特に慎重にデータを管理しています。個人情報の第三者提供は行いません。",
      icon: <Shield className="w-5 h-5 text-red-500" />,
    },
    {
      id: 6,
      category: "プライバシー・セキュリティ",
      question: "感情ログなどのデータは安全ですか？",
      answer:
        "はい、すべてのデータは暗号化されて保存され、厳格なアクセス制御のもとで管理されています。データは統計的な分析にのみ使用され、個人を特定できる形での利用は一切行いません。",
      icon: <Shield className="w-5 h-5 text-red-500" />,
    },
    {
      id: 7,
      category: "サポート",
      question: "サポート対応時間を教えてください。",
      answer:
        "平日10時から18時までメール・チャットで対応しています。緊急時は児童相談所相談専用ダイヤル（0120-189-783）、24時間子供SOSダイヤル（0120-0-78310）、子どもの人権110番（0120-007-110）もご利用いただけます。",
      icon: <MessageCircle className="w-5 h-5 text-green-500" />,
    },
    {
      id: 8,
      category: "サポート",
      question: "緊急時のサポートはありますか？",
      answer:
        "Care Compass AI Proプランでは、緊急SOS通知機能をご利用いただけます。また、すべてのプランで緊急時の専用サポートチャネルをご案内しています。生命に関わる緊急事態の場合は、119番または最寄りの医療機関にご連絡ください。",
      icon: <MessageCircle className="w-5 h-5 text-green-500" />,
    },
    {
      id: 9,
      category: "機能について",
      question: "AIケアシステムはどのように機能しますか？",
      answer:
        "感情ログや日々の記録を基に、AIが個別化されたアドバイスや提案を行います。トラウマインフォームドケアの視点を取り入れ、ユーザーの安全性を最優先に設計されています。人間のカウンセラーとの連携も可能です。",
      icon: <Users className="w-5 h-5 text-blue-500" />,
    },
    {
      id: 10,
      category: "機能について",
      question: "レジリエンスチェックとは何ですか？",
      answer:
        "心の回復力や適応力を測定する機能です。定期的にチェックを行うことで、ご自身の成長や変化を可視化できます。結果に基づいて、個別化されたレジリエンス強化プログラムもご提案します。",
      icon: <Users className="w-5 h-5 text-blue-500" />,
    },
  ]

  const categories = [...new Set(faqData.map((item) => item.category))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">ACEs Japan Care HUB</h1>
                <p className="text-sm text-gray-600">よくある質問</p>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">よくある質問</h1>
            <p className="text-gray-600">ACEs Japan Care HUBについてよくお寄せいただくご質問をまとめました</p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                {faqData.find((item) => item.category === category)?.icon}
                <span className="ml-3">{category}</span>
              </h2>

              <div className="space-y-4">
                {faqData
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Card key={item.id} className="border-blue-200 hover:shadow-md transition-shadow">
                      <CardHeader className="cursor-pointer" onClick={() => toggleItem(item.id)}>
                        <CardTitle className="flex items-center justify-between text-lg">
                          <span className="flex items-center">
                            {item.icon}
                            <span className="ml-3">{item.question}</span>
                          </span>
                          {openItems.includes(item.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </CardTitle>
                      </CardHeader>
                      {openItems.includes(item.id) && (
                        <CardContent>
                          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
              </div>
            </div>
          ))}

          <Card className="mt-12 border-green-200 bg-green-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">他にご質問がございますか？</h3>
              <p className="text-green-700 mb-6">
                上記で解決しないご質問がございましたら、お気軽にお問い合わせください。
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                onClick={() => setChatbotOpen(true)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                お問い合わせする
              </Button>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                ホームページに戻る
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Enhanced AI Chatbot Component */}
      <EnhancedAIChatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-blue-100 sticky bottom-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <a
              href="https://www.youtube.com/@ACEsCareHUB2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
