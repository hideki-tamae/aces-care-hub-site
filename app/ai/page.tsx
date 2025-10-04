export default function Page(){
  return (
    <main className="prose mx-auto p-6">
      <h1>AI相談（ベータ）</h1>
      <p>現在は無料で試せる外部チャットをご案内しています。</p>
      <ul>
        <li><a className="underline" href="https://huggingface.co/chat" target="_blank" rel="noopener">Hugging Face Chat を開く</a></li>
      </ul>
      <p>※将来的にブラウザ内で動くWebLLMを導入予定です。</p>
    </main>
  );
}
