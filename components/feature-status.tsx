import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureStatus() {
  const features = [
    { name: "プライバシーポリシーページ", status: "完了", link: "/privacy" },
    { name: "よくある質問ページ", status: "完了", link: "/faq" },
    { name: "寄付・サポーター機能", status: "完了", link: "/donation" },
    { name: "メールリンク (tamatixyan@gmail.com)", status: "完了", link: "mailto:tamatixyan@gmail.com" },
    { name: "電話リンク (090-1362-0946)", status: "完了", link: "tel:090-1362-0946" },
    { name: "Twitter SNSリンク", status: "完了", link: "https://x.com/hayFkShSxNRVh1q" },
    { name: "Facebook SNSリンク", status: "完了", link: "https://www.facebook.com/hidetarounosuke" },
    { name: "YouTube SNSリンク", status: "完了", link: "https://www.youtube.com/@ACEsCareHUB2025" },
    { name: "ChatGPT連携チャットボット", status: "完了", link: "#" },
    { name: "レスポンシブデザイン", status: "完了", link: "#" },
    { name: "背景画像・エフェクト", status: "完了", link: "#" },
    { name: "洗練されたヘッダー", status: "完了", link: "#" },
  ]

  return (
    <Card className="mt-8 border-green-200 bg-green-50">
      <CardHeader>
        <CardTitle className="text-green-800 flex items-center">
          <CheckCircle className="w-6 h-6 mr-2" />
          実装済み機能一覧
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">🎉 すべての機能が実装完了！</h4>
          <p className="text-sm text-gray-700">
            ACEs Japan Care HUBウェブサイトは、ChatGPT連携チャットボット、寄付機能、
            各種ページ、SNSリンクなど、すべての要求された機能を含む完全なプラットフォームとして完成しました。
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
