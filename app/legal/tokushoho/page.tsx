import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              特定商取引法に基づく表記
            </h1>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <CardTitle className="text-xl">法定表記</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="grid gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">販売業者</h3>
                    <p className="text-gray-700">株式会社Limelien</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">運営責任者</h3>
                    <p className="text-gray-700">田前秀樹</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">所在地</h3>
                    <p className="text-gray-700">〒151-0065 東京都渋谷区大山町27-21-3F</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">電話番号</h3>
                    <p className="text-gray-700">090-1362-0946</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">メールアドレス</h3>
                    <p className="text-gray-700">tamatixyan@gmail.com</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">ホームページURL</h3>
                    <p className="text-gray-700">
                      <a 
                        href="https://v0-ace-s-japan-care-hub.vercel.app/" 
                        className="text-blue-600 hover:text-blue-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://v0-ace-s-japan-care-hub.vercel.app/
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">販売価格</h3>
                    <p className="text-gray-700">各商品・サービスのページに記載</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">商品代金以外の必要料金</h3>
                    <p className="text-gray-700">銀行振込手数料、インターネット接続料金等</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">お支払い方法</h3>
                    <p className="text-gray-700">クレジットカード（Stripe決済）、銀行振込</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">お支払い時期</h3>
                    <p className="text-gray-700">ご注文時に決済</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">サービスの提供時期</h3>
                    <p className="text-gray-700">決済完了後、即時またはイベント開催日</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">返品・キャンセル</h3>
                    <div className="text-gray-700 space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-800">デジタルコンテンツ・寄付・会費</h4>
                        <p>性質上、返品・返金はお受けできません</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">イベント参加費</h4>
                        <p>お客様都合によるキャンセルは返金をお受けできません</p>
                        <p>主催者都合による中止の場合のみ全額返金いたします</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">表現、商品に関する注意書き</h3>
                    <p className="text-gray-700">
                      本サービスの効果・成果を保証するものではありません。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <a 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← ホームに戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}