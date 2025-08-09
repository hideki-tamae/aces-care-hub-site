"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, Bot, User, Home } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

interface EnhancedAIChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export function EnhancedAIChatbot({ isOpen, onClose }: EnhancedAIChatbotProps) {
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

  const localResponses = {
    // サービス関連
    サービス:
      "ACEs Care HUBでは、個人向けのCare Compass AI（月額3,300円〜）から、団体向けのACEs Portable HUB（導入費110,000円〜）まで、様々なプランをご用意しています。\n\n• Care Compass AI Lite（月額3,300円）\n• Care Compass AI Pro（月額5,500円）\n• ACEs Portable HUB（導入費110,000円〜）\n\n詳しくはサービス一覧をご覧ください。",

    プラン:
      "3つの主要プランをご用意しています：\n\n🔹 Care Compass AI Lite（月額3,300円）\n- サイレントマジョリティダイアログ\n- レジリエンスチェック（月1回）\n- 感情ログ＋簡易アドバイス\n\n🔹 Care Compass AI Pro（月額5,500円）\n- トラウマインフォームドケア視点の提案\n- レジリエンス強化プログラム（週1）\n- 緊急SOS通知\n- データ履歴の可視化\n\n🔹 ACEs Portable HUB（導入費110,000円〜）\n- 多職種連携管理\n- ACEs影響度共有\n- リアルタイムAI課題抽出\n- TIC研修モジュール",

    料金: "料金体系は以下の通りです：\n\n💰 個人向けプラン\n• Lite: 月額3,300円（税込）\n• Pro: 月額5,500円（税込）\n\n💼 団体向けプラン\n• ACEs Portable HUB: 導入費110,000円〜 + 月額55,000円〜\n\n支払い方法：クレジットカード、PayPay、銀行振込\n詳細な料金についてはお気軽にお問い合わせください。",

    // ACEs・ヤングケアラー関連
    ACEs: "ACEs（Adverse Childhood Experiences：逆境的小児期体験）とは、18歳未満で経験した以下のような体験のことです：\n\n• 身体的・心理的・性的虐待\n• 身体的・心理的ネグレクト\n• 家庭機能不全（薬物依存、精神疾患、DV等）\n\nACEsスコアが高いほど、成人後の健康問題や社会的困難のリスクが高まることが研究で明らかになっています。当プラットフォームではACEsの影響を理解し、トラウマインフォームドケアの視点で回復をサポートします。",

    ヤングケアラー:
      "ヤングケアラーとは、家族の世話や介護を担う18歳未満の子どもたちのことです：\n\n📝 主な役割\n• 家族の身体的・精神的ケア\n• 家事や兄弟姉妹の世話\n• 経済的責任\n• 通訳や手続きの代行\n\n🎯 当事者視点の重要性\n私たちは当事者の声を最優先に、「支援される側」ではなく「社会の一員」として尊重されるサポートを提供しています。",

    // 代表・組織関連
    田前: "田前秀樹（たまえ ひでき）は、ACEs Japan Care HUBの代表です：\n\n👤 プロフィール\n• ヤングケアラー当事者\n• ACEs研究と支援の第一人者\n• トラウマインフォームドケア専門家\n\n🎯 活動内容\n• 当事者視点を活かしたケアプログラム開発\n• 政策提言活動\n• 社会の構造的課題解決への取り組み\n• ACEs・ヤングケアラー支援の普及啓発",

    // サポート関連
    相談: "ご相談方法は複数ございます：\n\n📧 メール相談\n• tamatixyan@gmail.com\n• 24時間受付、平日10時〜18時に返信\n\n🤖 AI相談（このチャット）\n• 24時間いつでも利用可能\n\n🆘 緊急時の相談先\n• 児童相談所相談専用ダイヤル: 0120-189-783\n• 24時間子供SOSダイヤル: 0120-0-78310\n• 子どもの人権110番: 0120-007-110",

    お問い合わせ:
      "お問い合わせは以下の方法でお受けしています：\n\n✉️ メール: tamatixyan@gmail.com\n💬 このAIチャット: 24時間対応\n\n無料相談も承っておりますので、お気軽にご連絡ください。専門スタッフが丁寧にお答えいたします。",

    // 寄付・サポート関連
    寄付: "ご支援いただける方法は3つございます：\n\n💝 継続寄付（月額1,000円〜）\n• ブロンズサポーター: 月額1,000円〜\n• シルバーサポーター: 月額5,000円〜\n• ゴールドサポーター: 月額10,000円〜\n\n🎁 今回のみ寄付（3,000円〜）\n• お気持ちに合わせた金額\n\n🏢 企業パートナーシップ\n• 法人・団体様向けプログラム\n\n詳しくは寄付ページをご覧いただくか、tamatixyan@gmail.com までお問い合わせください。",

    緊急: "緊急時の相談先について：\n\n🚨 子ども・若者向け緊急相談\n• 児童相談所相談専用ダイヤル: 0120-189-783（いちはやく・おなやみを）\n• 24時間子供SOSダイヤル: 0120-0-78310\n• 子どもの人権110番: 0120-007-110\n\n🏥 生命に関わる緊急事態\n• 119番（救急・消防）\n• 110番（警察）\n• 最寄りの医療機関\n\n📞 当プラットフォーム\n• Care Compass AI Proプランの緊急SOS機能\n\nあなたの安全が最優先です。一人で抱え込まず、適切な支援を求めてください。",
  }

  // ローカル応答をチェックする関数
  const getLocalResponse = (input: string): string | null => {
    const lowerInput = input.toLowerCase()

    // 挨拶
    if (lowerInput.includes("こんにちは") || lowerInput.includes("はじめまして")) {
      return "こんにちは！ACEs Japan Care HUBへようこそ。\n\nACEsやヤングケアラーに関するご質問、サービスについてのお問い合わせなど、何でもお気軽にお聞かせください。\n\n私たちは「安心してつながり、語り合い、回復できる社会」の実現を目指しています。"
    }

    if (lowerInput.includes("ありがとう")) {
      return "どういたしまして！お役に立てて嬉しいです。\n\n他にもご質問がございましたら、いつでもお気軽にお声かけください。あなたのサポートができることを心から願っています。"
    }

    // キーワードマッチング
    for (const [keyword, response] of Object.entries(localResponses)) {
      if (input.includes(keyword)) {
        return response
      }
    }

    // 費用関連
    if (lowerInput.includes("費用") || lowerInput.includes("値段") || lowerInput.includes("価格")) {
      return localResponses.料金
    }

    // 申し込み関連
    if (lowerInput.includes("申し込み") || lowerInput.includes("登録") || lowerInput.includes("始め")) {
      return "サービスのお申し込みありがとうございます！\n\n📝 お申し込み手順\n1. ご希望のプランをお選びください\n2. tamatixyan@gmail.com にご連絡\n3. 詳細なご案内をお送りします\n4. 決済手続き完了後、サービス開始\n\n🎯 おすすめプラン\n初めての方には「Care Compass AI Lite」（月額3,300円）がおすすめです。\n\nご不明点がございましたら、お気軽にお問い合わせください。"
    }

    return null
  }

  // ChatGPT APIを呼び出す関数
  const getChatGPTResponse = async (input: string): Promise<string> => {
    try {
      const chatMessages = messages
        .filter((msg) => !msg.isBot || msg.id === 1) // 最初の挨拶メッセージは含める
        .map((msg) => ({
          role: msg.isBot ? "assistant" : "user",
          content: msg.text,
        }))

      chatMessages.push({
        role: "user",
        content: input,
      })

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: chatMessages }),
      })

      if (!response.ok) {
        throw new Error("API request failed")
      }

      const data = await response.json()
      return data.message
    } catch (error) {
      console.error("ChatGPT API error:", error)
      return "申し訳ございません。現在AIサービスに接続できません。\n\nお急ぎの場合は以下にお問い合わせください：\n• メール: tamatixyan@gmail.com\n• 緊急時: 児童相談所相談専用ダイヤル 0120-189-783"
    }
  }

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputText
    setInputText("")
    setIsLoading(true)

    try {
      // まずローカル応答をチェック
      const localResponse = getLocalResponse(currentInput)

      let aiResponse: string

      if (localResponse) {
        // ローカル応答がある場合は即座に返答
        aiResponse = localResponse
        setTimeout(() => {
          const botMessage: Message = {
            id: messages.length + 2,
            text: aiResponse,
            isBot: true,
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, botMessage])
          setIsLoading(false)
        }, 500)
      } else {
        // ローカル応答がない場合はChatGPTに問い合わせ
        aiResponse = await getChatGPTResponse(currentInput)

        const botMessage: Message = {
          id: messages.length + 2,
          text: aiResponse,
          isBot: true,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "申し訳ございません。現在AIサービスに接続できません。\n\nお急ぎの場合は以下にお問い合わせください：\n• メール: tamatixyan@gmail.com\n• 緊急時: 児童相談所相談専用ダイヤル 0120-189-783",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      setIsLoading(false)
    }
  }

  const handleGoHome = () => {
    onClose()
    window.location.href = "/"
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
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleGoHome}
              className="text-white hover:bg-white/20"
              title="ホームに戻る"
            >
              <Home className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-4 h-4" />
            </Button>
          </div>
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
              緊急時: 児童相談所 0120-189-783 | 24時間子供SOS 0120-0-78310
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
