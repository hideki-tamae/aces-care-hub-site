"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, GraduationCap, Settings } from "lucide-react"

export function ServicesPlans() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">サービス・プラン一覧</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            あなたのニーズに合わせた、様々なケアプランをご用意しています。表示価格は税込です。
          </p>
        </div>

        {/* Main Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Care Compass AI Basic */}
          <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge className="w-fit bg-blue-100 text-blue-800">個人・家族向け</Badge>
              <CardTitle className="text-xl text-blue-800">Care Compass AI Basic</CardTitle>
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
              <div className="mb-4">
                <Badge className="bg-yellow-100 text-yellow-800 text-xs">おすすめ</Badge>
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">プランを選択</Button>
            </CardContent>
          </Card>

          {/* Care Compass AI Family */}
          <Card className="border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Badge className="w-fit bg-green-100 text-green-800">家族向け</Badge>
              <CardTitle className="text-xl text-green-800">Care Compass AI Family</CardTitle>
              <CardDescription>家族全体のケアサポート</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold text-green-600">¥5,500</span>
                <span className="text-gray-600">/月（税込）</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Basic機能すべて
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  家族間連携機能
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  家族向けレジリエンスプログラム
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  緊急時家族通知機能
                </li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600">プランを選択</Button>
            </CardContent>
          </Card>

          {/* Care Compass AI Professional */}
          <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white">
              おすすめ
            </Badge>
            <CardHeader>
              <Badge className="w-fit bg-purple-100 text-purple-800">個人・専門職向け</Badge>
              <CardTitle className="text-xl text-purple-800">Care Compass AI Professional</CardTitle>
              <CardDescription>TIC対応の高度なケアサポート</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold text-purple-600">¥8,800</span>
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
              <Button className="w-full bg-purple-500 hover:bg-purple-600">プランを選択</Button>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise Plan */}
        <div className="mb-12">
          <Card className="border-orange-200 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <Badge className="w-fit bg-orange-100 text-orange-800">団体・施設向け</Badge>
              <CardTitle className="text-2xl text-orange-800">ACEs Portable HUB Enterprise</CardTitle>
              <CardDescription>多職種連携管理システム</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">席数別料金</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>5席まで</span>
                      <div className="text-right">
                        <div className="font-bold text-orange-600">初期費用: ¥110,000</div>
                        <div className="text-sm text-gray-600">月額: ¥55,000</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>10席まで</span>
                      <div className="text-right">
                        <div className="font-bold text-orange-600">初期費用: ¥220,000</div>
                        <div className="text-sm text-gray-600">月額: ¥110,000</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span>20席まで</span>
                      <div className="text-right">
                        <div className="font-bold text-orange-600">初期費用: ¥330,000</div>
                        <div className="text-sm text-gray-600">月額: ¥165,000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">機能</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      カスタムダッシュボード
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      専用サポート
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-orange-500 hover:bg-orange-600 px-8">お問い合わせ</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student Discount */}
        <div className="mb-12">
          <Card className="border-pink-200 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center mb-2">
                <GraduationCap className="w-6 h-6 text-pink-600 mr-2" />
                <Badge className="bg-pink-100 text-pink-800">学割</Badge>
              </div>
              <CardTitle className="text-2xl text-pink-800">Students & Educators</CardTitle>
              <CardDescription>学生・教育関係者向け特別価格</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">対象</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      大学生・大学院生
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      専門学校生
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      教職員
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      研究者
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">割引内容</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-pink-50 rounded-lg">
                      <div className="font-semibold text-pink-800">Basic</div>
                      <div className="text-sm">¥3,300 → <span className="font-bold text-pink-600">¥1,980</span></div>
                    </div>
                    <div className="p-3 bg-pink-50 rounded-lg">
                      <div className="font-semibold text-pink-800">Professional</div>
                      <div className="text-sm">¥8,800 → <span className="font-bold text-pink-600">¥5,280</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">適用方法</h4>
                <p className="text-sm text-gray-700 mb-4">
                  学生証または在職証明書をメールでお送りください。確認後、割引価格を適用いたします。
                </p>
                <p className="text-xs text-gray-600 mb-4">
                  ※ 学割は年度ごとに更新が必要です。更新時に再度証明書の提出をお願いいたします。
                </p>
                <Button className="bg-pink-500 hover:bg-pink-600">学割で申し込む</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Common Options */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">共通オプション</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Settings className="w-8 h-8 text-gray-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">追加ユーザー</h4>
                <p className="text-sm text-gray-600 mb-3">家族や同僚の追加アカウント</p>
                <div className="font-bold text-gray-800">¥1,100/月</div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Settings className="w-8 h-8 text-gray-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">データエクスポート</h4>
                <p className="text-sm text-gray-600 mb-3">詳細レポート・分析データ</p>
                <div className="font-bold text-gray-800">¥550/月</div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Settings className="w-8 h-8 text-gray-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">専門家相談</h4>
                <p className="text-sm text-gray-600 mb-3">月1回の専門家との相談</p>
                <div className="font-bold text-gray-800">¥3,300/月</div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Settings className="w-8 h-8 text-gray-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">優先サポート</h4>
                <p className="text-sm text-gray-600 mb-3">24時間以内のサポート対応</p>
                <div className="font-bold text-gray-800">¥2,200/月</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}