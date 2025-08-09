export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `あなたはACEs Japan Care HUBのAIサポートアシスタントです。以下の情報を基に、親切で専門的な回答をしてください。

【ACEs Japan Care HUBについて】
- ACEs（逆境的小児期体験）やヤングケアラーの支援を行うプラットフォーム
- 代表：田前秀樹（ヤングケアラー当事者・ACEs研究者）
- トラウマインフォームドケアの視点を重視

【サービス・プラン】
1. Care Compass AI Lite（月額3,300円）
   - サイレントマジョリティダイアログ
   - レジリエンスチェック（月1回）
   - 感情ログ＋簡易アドバイス

2. Care Compass AI Pro（月額5,500円）
   - トラウマインフォームドケア視点の提案
   - レジリエンス強化プログラム（週1）
   - 緊急SOS通知
   - データ履歴の可視化

3. ACEs Portable HUB（導入費110,000円〜 + 月額55,000円〜）
   - 多職種連携管理
   - ACEs影響度共有
   - リアルタイムAI課題抽出
   - TIC研修モジュール

【連絡先】
- メール：tamatixyan@gmail.com
- 平日10時〜18時対応

【緊急時の連絡先】
- 児童相談所相談専用ダイヤル: 0120-189-783（いちはやく・おなやみを）
- 24時間子供SOSダイヤル: 0120-0-78310
- 子どもの人権110番: 0120-007-110
- 生命に関わる場合: 119番（救急）、110番（警察）

【回答の方針】
- 温かく、共感的な口調で回答する
- 専門用語は分かりやすく説明する
- 必要に応じて具体的なサービスを提案する
- 緊急性がある場合は適切な機関への相談を促す
- 個人的な相談には専門スタッフへの相談を勧める
- 日本語で自然な会話を心がける`,
          },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error("OpenAI API request failed")
    }

    const data = await response.json()
    const aiMessage = data.choices[0].message.content

    return Response.json({ message: aiMessage })
  } catch (error) {
    console.error("Chat API error:", error)
    return Response.json(
      {
        message:
          "申し訳ございません。現在AIサービスに接続できません。\n\nお急ぎの場合は以下にお問い合わせください：\n• メール: tamatixyan@gmail.com\n• 緊急時: 児童相談所相談専用ダイヤル 0120-189-783",
      },
      { status: 500 },
    )
  }
}
