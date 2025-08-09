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

interface SimpleAIChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export function SimpleAIChatbot({ isOpen, onClose }: SimpleAIChatbotProps) {
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

  const aiResponses = {
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
    相談: "ご相談方法は複数ございます：\n\n📧 メール相談\n• tamatixyan@gmail.com\n• 24時間受付、平日10時〜18時に返信\n\n📞 電話相談\n• 090-1362-0946\n• 平日10時〜18時\n\n🤖 AI相談（このチャット）\n• 24時間いつでも利用可能\n\n🆘 緊急時\n• Care Compass AI Proプランの緊急SOS機能\n• 生命に関わる場合は119番または最寄りの医療機関へ",

    お問い合わせ:
      "お問い合わせは以下の方法でお受けしています：\n\n✉️ メール: tamatixyan@gmail.com\n📞 電話: 090-1362-0946（平日10時〜18時）\n💬 このAIチャット: 24時間対応\n\n無料相談も承っておりますので、お気軽にご連絡ください。専門スタッフが丁寧にお答えいたします。",

    // 寄付・サポート関連
    寄付: "ご支援いただける方法は3つございます：\n\n💝 継続寄付（月額1,000円〜）\n• ブロンズサポーター: 月額1,000円〜\n• シルバーサポーター: 月額5,000円〜\n• ゴールドサポーター: 月額10,000円〜\n\n🎁 今回のみ寄付（3,000円〜）\n• お気持ちに合わせた金額\n\n🏢 企業パートナーシップ\n• 法人・団体様向けプログラム\n\n詳しくは寄付ページをご覧いただくか、tamatixyan@gmail.com までお問い合わせください。",

    サポーター:
      "サポータープランの詳細：\n\n🥉 ブロンズサポーター（月額1,000円〜）\n• 月次活動報告書\n• サポーター限定メルマガ\n• 年次報告書\n\n🥈 シルバーサポーター（月額5,000円〜）\n• ブロンズ特典すべて\n• オンライン交流会参加権\n• 田前代表との懇談会\n• 寄付金控除証明書\n\n🥇 ゴールドサポーター（月額10,000円〜）\n• シルバー特典すべて\n• 年次総会への招待\n• 個別相談セッション\n• ウェブサイトにお名前掲載\n\nこれまでに850名のサポーターの皆様にご支援いただいています。",

    // 機能・技術関連
    AI: "当プラットフォームのAI機能について：\n\n🤖 AIケアシステム\n• 感情ログの分析\n• 個別化されたアドバイス\n• トラウマインフォームドケアの視点\n• 24時間サポート\n\n📊 レジリエンスチェック\n• 心の回復力測定\n• 定期的な成長の可視化\n• 個別化プログラム提案\n\n🆘 緊急SOS機能（Proプラン）\n• 危機的状況の自動検知\n• 即座の専門スタッフ通知\n• 適切な支援機関への連携",

    緊急: "緊急時の対応について：\n\n🚨 生命に関わる緊急事態\n• 119番（救急・消防）\n• 110番（警察）\n• 最寄りの医療機関\n\n📞 当プラットフォーム緊急連絡\n• 090-1362-0946\n• Care Compass AI Proプランの緊急SOS機能\n\n🏥 相談機関\n• いのちの電話: 0570-783-556\n• こころの健康相談統一ダイヤル: 0570-064-556\n• チャイルドライン: 0120-99-7777\n\nあなたの安全が最優先です。一人で抱え込まず、適切な支援を求めてください。",

    // デフォルト応答
    default:
      "ご質問ありがとうございます。\n\nACEs Japan Care HUBでは、ACEsやヤングケアラーの方々への包括的なサポートを提供しています。\n\n🔍 よくあるご質問\n• サービス・プランについて\n• ACEs・ヤングケアラーについて\n• 料金・お支払いについて\n• 寄付・サポーターについて\n• 緊急時の対応について\n\nより詳しいサポートが必要でしたら、tamatixyan@gmail.com までお気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。",
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

    // AIの応答を生成
    setTimeout(() => {
      let aiResponse = aiResponses.default

      // キーワードマッチング（複数キーワードに対応）
      for (const [keyword, response] of Object.entries(aiResponses)) {
        if (keyword !== "default" && currentInput.includes(keyword)) {
          aiResponse = response
          break
        }
      }

      // より詳細なキーワードマッチング
      const input = currentInput.toLowerCase()
      if (input.includes("こんにちは") || input.includes("はじめまして")) {
        aiResponse =
          "こんにちは！ACEs Japan Care HUBへようこそ。\n\nACEsやヤングケアラーに関するご質問、サービスについてのお問い合わせなど、何でもお気軽にお聞かせください。\n\n私たちは「安心してつながり、語り合い、回復できる社会」の実現を目指しています。"
      } else if (input.includes("ありがとう")) {
        aiResponse =
          "どういたしまして！お役に立てて嬉しいです。\n\n他にもご質問がございましたら、いつでもお気軽にお声かけください。あなたのサポートができることを心から願っています。"
      } else if (input.includes("費用") || input.includes("値段") || input.includes("価格")) {
        aiResponse = aiResponses.料金
      } else if (input.includes("申し込み") || input.includes("登録") || input.includes("始め")) {
        aiResponse =
          "サービスのお申し込みありがとうございます！\n\n📝 お申し込み手順\n1. ご希望のプランをお選びください\n2. tamatixyan@gmail.com にご連絡\n3. 詳細なご案内をお送りします\n4. 決済手続き完了後、サービス開始\n\n🎯 おすすめプラン\n初めての方には「Care Compass AI Lite」（月額3,300円）がおすすめです。\n\nご不明点がございましたら、お気軽にお問い合わせください。"
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
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
