import React from "react";
import Link from "next/link";

const Pill = ({href, external=false, children}:{href:string; external?:boolean; children:React.ReactNode}) => {
  const cls = "inline-flex items-center rounded-md border border-slate-700 bg-transparent text-slate-100 px-3 py-1.5 text-sm hover:bg-slate-800/40";
  return external
    ? <a href={href} target="_blank" rel="noopener" className={cls}>{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
};

export default function FooterSimplified(): JSX.Element {
  return (
    <footer className="not-prose border-t border-slate-800 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <section aria-label="サイト案内">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">サイト案内</h2>
            <div className="flex flex-wrap gap-2">
              <Pill href="/contact">サポート（お問い合わせ）</Pill>
              <Pill href="/donation">寄付・サポーター</Pill>
              <Pill href="/faq">よくある質問</Pill>
              <Pill href="/ai">AI相談チャット</Pill>
              <Pill href="/privacy">プライバシーポリシー</Pill>
              <Pill href="/legal/tokushoho">特定商取引法に基づく表記</Pill>
            </div>
          </section>

          <section aria-label="ソーシャル">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">ソーシャル</h2>
            <div className="flex flex-wrap gap-2">
              <Pill href="https://bsky.app/" external>Bluesky</Pill>
              <Pill href="https://note.com/clean_minnow118" external>note</Pill>
              {/* NFT ラベル文字は表示しない。リンクのみ */}
              <Pill href="https://nft.hexanft.com/users/gdrqieu8SUQLW9" external>HEXA</Pill>
              <Pill href="https://opensea.io/ja/collection/project-re-verse" external>OpenSea</Pill>
              <Pill href="https://oncyber.io/spaces/0DCUetEBicRPi0fem1WM?coords=-2.07x2.85x5.14x1.58" external>Oncyber</Pill>
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4 text-xs text-slate-400">
          <span>&copy; {new Date().getFullYear()} ACEs Care HUB JAPAN</span>
          <a href="/#pricing" className="underline">サービス・料金</a>
        </div>
      </div>
    </footer>
  );
}
