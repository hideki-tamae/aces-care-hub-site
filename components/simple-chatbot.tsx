"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

interface SimpleChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export function SimpleChatbot({ isOpen, onClose }: SimpleChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "こんにちは！ACEs Japan Care HUBのAIサポートです。ACEsやヤングケアラーに関するご質問、サービスについてのお問い合わせなど、何でもお気軽にお聞かせください。",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const botResponses = {
    サービス:
      "ACEs Care HUBでは、個人向けのCare Compass AI（月額3,300円〜）から、団体向けのACEs Portable HUB（導入費110,000円〜）まで、様々なプランをご用意しています。詳しくはサービス一覧をご覧ください。",
    プラン:
      "Care Compass AI Lite（月額3,300円）、Care Compass AI Pro（月額5,500円）、ACEs Portable HUB（導入費110,000円〜）などのプランがございます。",
    料金: "個人向けプランは月額3,300円から、団体向けは導入費110,000円からとなっております。詳細な料金についてはお気軽にお問い合わせください。",
    ACEs: "ACEs（Adverse Childhood Experiences：逆境的小児期体験）とは、18歳未満で経験した虐待、ネグレクト、家庭機能不全などの体験のことです。当プラットフォームではACEsの影響を理解し、回復をサポートします。",
    ヤングケアラー:
      "ヤングケアラーとは、家族の世話や介護を担う18歳未満の子どもたちのことです。当事者の視点を大切にしたサポートを提供しています。",
    田前: "田前秀樹は、ヤングケアラー当事者であり、ACEs研究と支援の第一人者です。当事者視点を活かしたケアプログラム開発と政策提言を行っています。",
    相談: "ご相談は tamatixyan@gmail.com までメールでお気軽にお問い合わせください。平日10時〜18時に対応しております。",
    お問い合わせ: "お問い合わせは tamatixyan@gmail.com までお願いいたします。無料相談も承っております。",
    寄付: "継続寄付（月額1,000円〜）や今回のみの寄付（3,000円〜）で、ACEsやヤングケアラーの方々を支援できます。詳しくは寄付ページをご覧ください。",
    サポーター:
      "ブロンズ（月額1,000円〜）、シルバー（月額5,000円〜）、ゴールド（月額10,000円〜）のサポータープランをご用意しています。",
    緊急: "緊急時は090-1362-0946または最寄りの医療機関にご連絡ください。Care Compass AI Proプランでは緊急SOS通知機能もご利用いただけます。",
    default:
      "ご質問ありがとうございます。より詳しいサポートが必要でしたら、tamatixyan@gmail.com までお気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。",
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsLoading(true)

    // Bot response logic
    setTimeout(() => {
      let botResponse = botResponses.default

      for (const [key, response] of Object.entries(botResponses)) {
        if (key !== "default" && inputText.includes(key)) {
          botResponse = response
          break
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md h-[500px] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
          <CardTitle className="text-lg flex items-center">
            <Bot className="w-5 h-5 mr-2" />
            ACEs Care AI サポート
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot ? "bg-gray-100 text-gray-800" : "bg-blue-500 text-white"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    {message.isBot ? <Bot className="w-4 h-4 mr-2 text-blue-500" /> : <User className="w-4 h-4 mr-2" />}
                    <span className="text-sm font-medium">{message.isBot ? "AI サポート" : "あなた"}</span>
                  </div>
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString("ja-JP", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800">
                  <div className="flex items-center mb-2">
                    <Bot className="w-4 h-4 mr-2 text-blue-500 animate-pulse" />
                    <span className="text-sm font-medium">AI サポート</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="メッセージを入力..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-blue-500 hover:bg-blue-600"
                disabled={isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              緊急時は 090-1362-0946 または最寄りの医療機関にご連絡ください
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
