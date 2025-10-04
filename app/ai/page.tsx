export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">AI相談（ベータ）</h1>
          <p className="text-gray-700 mb-6">
            現在は無料で試せる外部チャットをご案内しています。
          </p>
          <ul className="mb-8">
            <li>
              <a
                className="text-blue-600 hover:text-blue-800 underline font-medium"
                href="https://huggingface.co/chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hugging Face Chat を開く
              </a>
            </li>
          </ul>
          <p className="text-gray-600 text-sm">
            ※将来的にブラウザ内で動くWebLLMを導入予定です。
          </p>
          <div className="mt-8">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← ホームに戻る
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
