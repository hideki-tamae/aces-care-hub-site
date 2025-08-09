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

interface AIChatbotGPTProps {
  isOpen: boolean
  onClose: () => void
}

export function AIChatbotGPT({ isOpen, onClose }: AIChatbotGPTProps) {
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

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsLoading(true)

    try {
      // ChatGPT APIに送信するメッセージ形式に変換
      const chatMessages = messages.map((msg) => ({
        role: msg.isBot ? "assistant" : "user",
        content: msg.text,
      }))

      // 新しいユーザーメッセージを追加
      chatMessages.push({
        role: "user",
        content: inputText,
      })

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: chatMessages }),
      })

      const data = await response.json()

      const botMessage: Message = {
        id: messages.length + 2,
        text: data.message,
        isBot: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "申し訳ございません。現在AIサービスに接続できません。お急ぎの場合は tamatixyan@gmail.com までお問い合わせください。",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
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
