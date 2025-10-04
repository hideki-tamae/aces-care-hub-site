import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">返金ポリシー</h1>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <CardTitle className="text-xl">ACEs Care HUB JAPAN 返金ポリシー</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="grid gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">基本方針</h3>
                    <p className="text-gray-700">
                      当サービスでは、お客様に安心してサービスをご利用いただくため、以下の返金ポリシーを定めています。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">デジタルコンテンツ・寄付・会費</h3>
                    <p className="text-gray-700">
                      サービスの性質上、返品・返金はお受けできません。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">イベント参加費</h3>
                    <div className="text-gray-700 space-y-2">
                      <p>
                        <strong>お客様都合によるキャンセル：</strong>返金はお受けできません
                      </p>
                      <p>
                        <strong>主催者都合による中止：</strong>全額返金いたします
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">返金手続き</h3>
                    <p className="text-gray-700">
                      返金が適用される場合、お支払い方法に応じて以下の手続きとなります。
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                      <li>クレジットカード決済：決済を取り消し、カード会社を通じて返金</li>
                      <li>銀行振込：指定口座へ振込（振込手数料は当方負担）</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">返金までの期間</h3>
                    <p className="text-gray-700">
                      返金手続き完了後、クレジットカードの場合は1〜2ヶ月程度、銀行振込の場合は1週間程度でご返金いたします。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">お問い合わせ</h3>
                    <p className="text-gray-700">
                      返金に関するお問い合わせは、以下のメールアドレスまでお願いいたします。
                      <br />
                      <a href="mailto:tamatixyan@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                        tamatixyan@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              ← ホームに戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
