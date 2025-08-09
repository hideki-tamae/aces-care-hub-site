import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">ACEs Japan Care HUB🇯🇵</h1>
                <p className="text-sm text-gray-600">プライバシーポリシー</p>
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">プライバシーポリシー</h1>
            <p className="text-gray-600">最終更新日：2025年1月9日</p>
          </div>

          <div className="space-y-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <FileText className="w-6 h-6 mr-3" />
                  基本方針
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-blue max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  ACEs Japan Care HUB（以下「当サービス」）は、ユーザーの皆様の個人情報保護の重要性を認識し、
                  個人情報の保護に関する法律（個人情報保護法）を遵守し、適切な取り扱いを実施いたします。
                  特に、トラウマインフォームドケアの観点から、ユーザーの安全性とプライバシーを最優先に考えています。
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <Lock className="w-6 h-6 mr-3" />
                  収集する個人情報
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">1. 基本情報</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>お名前、メールアドレス、電話番号</li>
                      <li>ご利用プラン、お支払い情報</li>
                      <li>お問い合わせ内容、相談内容</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">2. サービス利用情報</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>感情ログ、レジリエンスチェック結果</li>
                      <li>AIケアシステムとの対話履歴</li>
                      <li>サービス利用状況、アクセスログ</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-800">
                  <Eye className="w-6 h-6 mr-3" />
                  個人情報の利用目的
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>サービスの提供、運営、改善</li>
                  <li>ユーザーサポート、お問い合わせ対応</li>
                  <li>AIケアシステムによる個別化されたサポート提供</li>
                  <li>レジリエンス向上プログラムの提供</li>
                  <li>緊急時のSOS対応（Care Compass AI Proプラン）</li>
                  <li>サービス利用状況の分析（統計的処理のみ）</li>
                  <li>重要なお知らせ、サービス更新情報の配信</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">個人情報の第三者提供</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  当サービスは、以下の場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>ユーザーの明示的な同意がある場合</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">セキュリティ対策</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>SSL暗号化通信による情報保護</li>
                  <li>アクセス制限による不正アクセス防止</li>
                  <li>定期的なセキュリティ監査の実施</li>
                  <li>従業員への個人情報保護研修の実施</li>
                  <li>トラウマインフォームドケアに配慮したデータ管理</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">ユーザーの権利</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ユーザーは、ご自身の個人情報について以下の権利を有します：
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>開示請求権（個人情報の利用状況の確認）</li>
                  <li>訂正・削除請求権</li>
                  <li>利用停止請求権</li>
                  <li>サービス退会時のデータ削除請求権</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  これらの権利行使については、tamatixyan@gmail.com までお問い合わせください。
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">お問い合わせ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  本プライバシーポリシーに関するご質問、個人情報の取り扱いに関するお問い合わせは、
                  以下までご連絡ください：
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800">ACEs Japan Care HUB</p>
                  <p className="text-blue-700">メール：tamatixyan@gmail.com</p>
                  <p className="text-blue-700">対応時間：平日 10:00-18:00</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                ホームページに戻る
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">ACEs Care HUB</span>
              </div>
              <p className="text-gray-400 text-sm">安心してつながり、語り合い、回復できる社会をつくる</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>メール: tamatixyan@gmail.com</li>
                <li>電話: 090-1362-0946</li>
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
    </div>
  )
}
