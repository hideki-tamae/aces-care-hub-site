"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function AIPage() {
  const hasWebGPU = typeof window !== "undefined" && (navigator as any).gpu;
  const [ready, setReady] = useState(false);
  const [initMsg, setInitMsg] = useState("初期化中…");
  const engineRef = useRef<any>(null);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<{role:"user"|"assistant",content:string}[]>([]);

  useEffect(() => {
    if (!hasWebGPU) return;
    const t = setInterval(async () => {
      const w: any = window as any;
      if (w.webllm?.CreateMLCEngine) {
        clearInterval(t);
        try {
          engineRef.current = await w.webllm.CreateMLCEngine(
            "qwen2.5-0.5b-instruct-q4f16_1-MLC",
            { initProgressCallback: (r:any)=> setInitMsg(r?.text || "初期化中…") }
          );
          setReady(true);
        } catch(e:any){ setInitMsg("初期化に失敗しました"); }
      }
    }, 200);
    return () => clearInterval(t);
  }, [hasWebGPU]);

  const send = async () => {
    const q = input.trim(); if (!q || !engineRef.current) return;
    setMsgs(m=>[...m,{role:"user",content:q}]);
    setInput("");
    let acc = "";
    try{
      const resp = await engineRef.current.chat.completions.create({
        messages: [{ role: "user", content: q }],
        stream: true,
      });
      for await (const chunk of resp) {
        const delta = chunk.choices?.[0]?.delta?.content ?? "";
        acc += delta;
        setMsgs(m=>{
          const last = m[m.length-1];
          if(last?.role==="assistant"){
            const copy=[...m]; copy[copy.length-1]={role:"assistant",content:acc}; return copy;
          }
          return [...m,{role:"assistant",content:acc}];
        });
      }
    } catch {
      setMsgs(m=>[...m,{role:"assistant",content:"エラーが発生しました。短い質問でお試しください。"}]);
    }
  };

  return (
    <main className="prose mx-auto p-6">
      <h1>AI相談（無料ベータ）</h1>

      {!hasWebGPU && (
        <div className="rounded-md border border-amber-300 bg-amber-50 p-4">
          この端末ではブラウザ内実行（WebGPU）が使えません。<br/>
          <a className="underline" href="https://huggingface.co/chat" target="_blank" rel="noopener">Hugging Face Chat を開く</a>
        </div>
      )}

      {hasWebGPU && (
        <>
          <p>ブラウザ内で軽量モデルを動かしています（通信不要／β）。長文・専門相談は外部の
            <a className="underline" href="https://huggingface.co/chat" target="_blank" rel="noopener">Hugging Face Chat</a> を推奨します。</p>
          <div className="not-prose border rounded-md p-3">
            <div className="h-56 overflow-y-auto text-sm mb-2 bg-white p-2 rounded">
              {msgs.map((m,i)=>(
                <div key={i} className={m.role==="user"?"text-blue-700":"text-gray-800"}>
                  <b>{m.role==="user"?"あなた":"AI"}：</b> {m.content}
                </div>
              ))}
              {!ready && <div className="text-gray-500">{initMsg}</div>}
            </div>
            <div className="flex gap-2">
              <input className="flex-1 border rounded px-2 py-1" value={input} onChange={e=>setInput(e.target.value)} placeholder="ここに質問を入力" />
              <button className="border rounded px-3" onClick={send} disabled={!ready}>送信</button>
            </div>
          </div>
        </>
      )}

      {/* WebLLM CDN */}
      <Script src="https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.45/dist/web-llm.min.js" strategy="afterInteractive" />
    </main>
  );
}
