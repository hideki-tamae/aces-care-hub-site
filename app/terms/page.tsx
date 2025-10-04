import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">利用規約</h1>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <CardTitle className="text-xl">ACEs Care HUB JAPAN 利用規約</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="grid gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">第1条（適用）</h3>
                    <p className="text-gray-700">
                      本規約は、ACEs Care HUB
                      JAPANが提供するサービスの利用条件を定めるものです。登録ユーザーの皆様には、本規約に従ってサービスをご利用いただきます。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">第2条（利用登録）</h3>
                    <p className="text-gray-700">
                      利用登録は、登録希望者が本規約に同意の上、所定の方法によって利用登録を申請し、当サービスがこれを承認することによって完了します。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">第3条（禁止事項）</h3>
                    <p className="text-gray-700 mb-2">
                      ユーザーは、サービスの利用にあたり、以下の行為をしてはなりません。
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>法令または公序良俗に違反する行為</li>
                      <li>犯罪行為に関連する行為</li>
                      <li>当サービスの運営を妨害するおそれのある行為</li>
                      <li>他のユーザーに対する嫌がらせや誹謗中傷</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">第4条（サービスの提供の停止等）</h3>
                    <p className="text-gray-700">
                      当サービスは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなくサービスの全部または一部の提供を停止または中断することができます。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">第5条（免責事項）</h3>
                    <p className="text-gray-700">
                      当サービスは、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、消費者契約法その他の法令により、責任を免れることができない場合はこの限りではありません。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">お問い合わせ</h3>
                    <p className="text-gray-700">
                      本規約に関するお問い合わせは、以下のメールアドレスまでお願いいたします。
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
