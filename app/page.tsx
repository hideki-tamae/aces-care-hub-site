"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Star, ArrowRight, CheckCircle, Mail, Phone, Gift } from "lucide-react"
import { EnhancedAIChatbot } from "@/components/enhanced-ai-chatbot"
import Link from "next/link"
import { EnhancedHeader } from "@/components/enhanced-header"

export default function HomePage() {
  const [chatbotOpen, setChatbotOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Enhanced Header */}
      <EnhancedHeader onChatbotOpen={() => setChatbotOpen(true)} />

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-green-50/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">🌱 あなたの回復と成長を支援します</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            ACEs×ヤングケアラーが
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              安心してつながり
            </span>
            <br />
            語り合い回復できる社会へ
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            ACEs（逆境的小児期体験）やヤングケアラーとしての背景をもつ人々が、
            <br />
            「ありのままの自分」で居られる居場所と、新しい社会的物語を生み出す場を提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-lg px-8 py-3"
              onClick={() => {
                const servicesSection = document.getElementById("services")
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              サービスを見る
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-50 text-lg px-8 py-3 bg-transparent"
              onClick={() => setChatbotOpen(true)}
            >
              AI相談を始める
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">理念・ビジョン・ミッション</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">私たちが大切にしている価値観と、目指している未来について</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800">🌱 理念</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  ACEsやヤングケアラーとしての背景をもつ人々が、「支援される側」にとどまらず、
                  「社会の一員」として尊重され、共に未来をつくる存在となることを目指します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">🎯 ビジョン</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  あらゆる人が、過去にどんな経験をしていても、"安心してつながり、語り合い、回復できる"社会をつくる。
                  孤立や自己否定に陥ることなく、「ありのままの自分」で居られる居場所の創出。
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800">🚀 ミッション</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    安心して参加できる"居場所"の運営
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    当事者の物語と構造的視点を社会に届ける「発信」と「提言」
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    新しいケアの文化を育てる活動
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">サービス・プラン一覧</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              あなたのニーズに合わせた、様々なケアプランをご用意しています
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Care Compass AI Lite */}
            <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-800">個人・家族向け</Badge>
                <CardTitle className="text-xl text-blue-800">Care Compass AI Lite</CardTitle>
                <CardDescription>基本的なAIケアサポート</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">¥3,300</span>
                  <span className="text-gray-600">/月（税込）</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    サイレントマジョリティダイアログ
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    レジリエンスチェック（月1回）
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    感情ログ＋簡易アドバイス
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">プランを選択</Button>
              </CardContent>
            </Card>

            {/* Care Compass AI Pro */}
            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                おすすめ
              </Badge>
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800">個人・専門職向け</Badge>
                <CardTitle className="text-xl text-green-800">Care Compass AI Pro</CardTitle>
                <CardDescription>TIC対応の高度なケアサポート</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">¥5,500</span>
                  <span className="text-gray-600">/月（税込）</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    トラウマインフォームドケア視点の提案
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    レジリエンス強化プログラム（週1）
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    緊急SOS通知
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    データ履歴の可視化
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600">プランを選択</Button>
              </CardContent>
            </Card>

            {/* ACEs Portable HUB */}
            <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Badge className="w-fit bg-purple-100 text-purple-800">団体・施設向け</Badge>
                <CardTitle className="text-xl text-purple-800">ACEs Portable HUB</CardTitle>
                <CardDescription>多職種連携管理システム</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-600">¥110,000〜</span>
                  <span className="text-gray-600 text-sm block">導入費 + 月額¥55,000〜</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    多職種連携管理
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    ACEs影響度共有
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    リアルタイムAI課題抽出
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    TIC研修モジュール
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600">お問い合わせ</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">代表について</h2>
            </div>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    田前
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">田前秀樹（たまえ ひでき）</h3>
                    <Badge className="mb-4 bg-blue-100 text-blue-800">ヤングケアラー当事者・ACEs研究者</Badge>
                    <p className="text-gray-700 leading-relaxed">
                      ヤングケアラー当事者であり、ACEs研究と支援の第一人者。
                      <br />
                      当事者視点を活かしたケアプログラム開発と政策提言を行い、
                      <br />
                      社会の構造的課題解決に挑戦しています。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">お客様の声</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">実際にサービスをご利用いただいている方々からのメッセージ</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  「田前さんのプログラムで、自分の気持ちを言葉にできるようになり、少しずつ前向きになれました。」
                </p>
                <div className="text-sm text-gray-600">— Y.Kさん（30代・女性）</div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  「職場でのストレス管理に役立ち、家族との関係も良くなりました。感謝しています。」
                </p>
                <div className="text-sm text-gray-600">— T.Mさん（40代・男性）</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-pink-100 text-pink-800">🤝 社会を変える力になる</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              あなたのご支援が
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                希望ある未来
              </span>
              を創ります
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ヤングケアラーやACEsの方々が「自分らしく生きられる社会」を一緒につくりませんか？
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-pink-200 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">継続寄付</h3>
                <p className="text-gray-600 mb-4">月額1,000円から始められる継続的なご支援</p>
                <div className="text-2xl font-bold text-pink-600 mb-4">¥1,000〜/月</div>
                <Link href="/donation">
                  <Button className="bg-pink-500 hover:bg-pink-600 w-full">サポーターになる</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">今回のみ寄付</h3>
                <p className="text-gray-600 mb-4">お気持ちに合わせた金額でのご支援</p>
                <div className="text-2xl font-bold text-orange-600 mb-4">¥3,000〜</div>
                <Link href="/donation">
                  <Button className="bg-orange-500 hover:bg-orange-600 w-full">寄付をする</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">企業パートナー</h3>
                <p className="text-gray-600 mb-4">法人・団体様向けの包括的支援プログラム</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">要相談</div>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 w-full"
                  onClick={() =>
                    (window.location.href =
                      "mailto:tamatixyan@gmail.com?subject=企業パートナーシップについて&body=法人名：%0D%0A%0D%0Aご担当者名：%0D%0A%0D%0Aお問い合わせ内容：%0D%0A")
                  }
                >
                  お問い合わせ
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              これまでに<strong className="text-pink-600">850名</strong>のサポーターの皆様にご支援いただいています
            </p>
            <Link href="/donation">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-lg px-8 py-3"
              >
                詳しい寄付方法を見る
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-green-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">無料相談・お問い合わせ</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              ご不明点やご相談はお気軽にどうぞ。あなたに最適なサポートをご提案いたします。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">お問い合わせ方法</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-300 mr-4" />
                  <div>
                    <p className="font-semibold">メール</p>
                    <a href="mailto:tamatixyan@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                      tamatixyan@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-300 mr-4" />
                  <div>
                    <p className="font-semibold">緊急時相談</p>
                    <div className="text-blue-100 text-sm space-y-1">
                      <p>児童相談所: 0120-189-783</p>
                      <p>24時間子供SOS: 0120-0-78310</p>
                      <p>子どもの人権110番: 0120-007-110</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">AI相談チャット</h4>
                <p className="text-blue-100 mb-4">24時間いつでもAIがご相談にお答えします</p>
                <Button className="bg-white text-blue-900 hover:bg-blue-50" onClick={() => setChatbotOpen(true)}>
                  AI相談を始める
                </Button>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">無料相談フォーム</CardTitle>
                <CardDescription className="text-blue-100">お気軽にご相談ください</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">お名前</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg text-gray-800" placeholder="山田太郎" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">メールアドレス</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg text-gray-800"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ご相談内容</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg text-gray-800 h-24"
                    placeholder="ご相談内容をお聞かせください"
                  />
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                  onClick={() =>
                    (window.location.href =
                      "mailto:tamatixyan@gmail.com?subject=無料相談フォームからのお問い合わせ&body=お名前：%0D%0A%0D%0Aご相談内容：%0D%0A")
                  }
                >
                  相談を送信
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">ACEs Care HUB</span>
              </div>
              <p className="text-gray-400 text-sm">安心してつながり、語り合い、回復できる社会をつくる</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/donation" className="hover:text-white transition-colors">
                    寄付・サポーター
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <button onClick={() => setChatbotOpen(true)} className="hover:text-white transition-colors">
                    AI相談チャット
                  </button>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">SNS</h4>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/hayFkShSxNRVh1q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://www.facebook.com/hidetarounosuke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 ACEs Care HUB JAPAN | All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Enhanced AI Chatbot Component */}
      <EnhancedAIChatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
    </div>
  )
}
