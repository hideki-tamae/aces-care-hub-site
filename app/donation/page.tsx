"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Users, Gift, Star, CheckCircle, CreditCard, Calendar } from "lucide-react"
import Link from "next/link"

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState<"monthly" | "onetime">("monthly")

  const donationAmounts = [1000, 3000, 5000, 10000, 30000, 50000]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">ACEs Japan Care HUB🇯🇵</h1>
                <p className="text-sm text-gray-600">寄付・サポーター</p>
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
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-pink-100 text-pink-800">🤝 一緒に社会を変えませんか</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              ACEs・ヤングケアラーが
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                自分らしく生きられる
              </span>
              <br />
              社会をつくる
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              あなたのご支援が、ACEsやヤングケアラーの方々の「安心できる居場所」と
              <br />
              「希望ある未来」を創り出します。
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-pink-200 bg-pink-50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">1,200+</div>
                <p className="text-gray-700">支援を受けた方々</p>
              </CardContent>
            </Card>
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">850+</div>
                <p className="text-gray-700">サポーターの皆様</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24時間</div>
                <p className="text-gray-700">緊急サポート体制</p>
              </CardContent>
            </Card>
          </div>

          {/* Donation Types */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">寄付の方法をお選びください</h2>
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-2 shadow-md">
                <Button
                  variant={donationType === "monthly" ? "default" : "ghost"}
                  onClick={() => setDonationType("monthly")}
                  className={`px-6 py-2 ${
                    donationType === "monthly"
                      ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  継続寄付
                </Button>
                <Button
                  variant={donationType === "onetime" ? "default" : "ghost"}
                  onClick={() => setDonationType("onetime")}
                  className={`px-6 py-2 ${
                    donationType === "onetime"
                      ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <Gift className="w-4 h-4 mr-2" />
                  今回のみ
                </Button>
              </div>
            </div>

            {/* Donation Amount Selection */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {donationAmounts.map((amount) => (
                <Card
                  key={amount}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedAmount === amount
                      ? "border-pink-500 bg-pink-50 shadow-md"
                      : "border-gray-200 hover:border-pink-300"
                  }`}
                  onClick={() => setSelectedAmount(amount)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-gray-800">¥{amount.toLocaleString()}</div>
                    <p className="text-sm text-gray-600">{donationType === "monthly" ? "/月" : ""}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="max-w-md mx-auto mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">その他の金額</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  ¥
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  placeholder="金額を入力"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
          </div>

          {/* Supporter Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">サポーター特典</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-bronze-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-amber-100 text-amber-800">ブロンズサポーター</Badge>
                  <CardTitle className="text-xl text-amber-800">月額 1,000円〜</CardTitle>
                  <CardDescription>継続的なご支援をいただく皆様</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      月次活動報告書
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      サポーター限定メルマガ
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      年次報告書
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-silver-200 hover:shadow-lg transition-shadow relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white">
                  人気
                </Badge>
                <CardHeader>
                  <Badge className="w-fit bg-gray-100 text-gray-800">シルバーサポーター</Badge>
                  <CardTitle className="text-xl text-gray-800">月額 5,000円〜</CardTitle>
                  <CardDescription>より深いご支援をいただく皆様</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      ブロンズ特典すべて
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      オンライン交流会参加権
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      田前代表との懇談会
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      寄付金控除証明書
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-yellow-100 text-yellow-800">ゴールドサポーター</Badge>
                  <CardTitle className="text-xl text-yellow-800">月額 10,000円〜</CardTitle>
                  <CardDescription>最高レベルのご支援をいただく皆様</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      シルバー特典すべて
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      年次総会への招待
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      個別相談セッション
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      ウェブサイトにお名前掲載
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How Donations Help */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">ご寄付の使い道</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Users className="w-6 h-6 mr-3" />
                    直接支援プログラム
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>AIケアシステムの運営</strong>
                        <p className="text-sm text-gray-600">24時間365日のサポート体制維持</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>緊急支援基金</strong>
                        <p className="text-sm text-gray-600">困窮状況にある方への即座の支援</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>専門カウンセラー配置</strong>
                        <p className="text-sm text-gray-600">トラウマインフォームドケア専門家</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <Star className="w-6 h-6 mr-3" />
                    社会変革活動
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>政策提言活動</strong>
                        <p className="text-sm text-gray-600">制度改善に向けた働きかけ</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>啓発・教育活動</strong>
                        <p className="text-sm text-gray-600">社会の理解促進と偏見解消</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong>研究開発</strong>
                        <p className="text-sm text-gray-600">より効果的な支援方法の開発</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Donation Form */}
          <Card className="max-w-2xl mx-auto border-pink-200">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-t-lg">
              <CardTitle className="text-center">寄付のお申し込み</CardTitle>
              <CardDescription className="text-pink-100 text-center">
                {donationType === "monthly" ? "継続寄付" : "今回のみの寄付"}で社会を変える一歩を
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">寄付金額</label>
                  <div className="text-2xl font-bold text-pink-600">
                    ¥{(selectedAmount || Number.parseInt(customAmount) || 0).toLocaleString()}
                    {donationType === "monthly" ? " /月" : ""}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="山田太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">メッセージ（任意）</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 h-20"
                    placeholder="応援メッセージがあればお聞かせください"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    活動報告やイベント情報を受け取る
                  </label>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-lg py-3"
                  onClick={() =>
                    (window.location.href =
                      "mailto:tamatixyan@gmail.com?subject=寄付のお申し込み&body=寄付種別：" +
                      (donationType === "monthly" ? "継続寄付" : "今回のみ") +
                      "%0D%0A金額：¥" +
                      (selectedAmount || Number.parseInt(customAmount) || 0).toLocaleString() +
                      "%0D%0A%0D%0Aお名前：%0D%0A%0D%0Aメールアドレス：%0D%0A%0D%0Aメッセージ：%0D%0A")
                  }
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  寄付を申し込む
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  ※ 実際の決済は、メール確認後に安全な決済システムをご案内いたします
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials from Supporters */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">サポーターの皆様の声</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-pink-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    「自分も若い頃に似た経験があり、この活動に深く共感しています。少しでも同じような境遇の方々の力になれれば。」
                  </p>
                  <div className="text-sm text-gray-600">— A.Sさん（シルバーサポーター）</div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    「田前さんの活動を知り、社会を変える力になりたいと思いました。毎月の報告書で成果を実感できます。」
                  </p>
                  <div className="text-sm text-gray-600">— M.Tさん（ゴールドサポーター）</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} ACEs Japan Care HUB. All rights reserved.</p>
            <div className="flex space-x-4">
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
        </div>
      </footer>
    </div>
  )
}
