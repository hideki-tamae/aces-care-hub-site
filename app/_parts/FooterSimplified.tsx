import React from "react";
import Link from "next/link";

const Pill = ({href, children}:{href:string; children:React.ReactNode}) => (
  <Link href={href} className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
    {children}
  </Link>
);

export default function FooterSimplified(): JSX.Element {
  return (
    <footer className="not-prose border-t border-gray-200 bg-gray-50/40">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* サイト案内（内部リンク） */}
          <section aria-label="サイト案内">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">サイト案内</h2>
            <div className="flex flex-wrap gap-2">
              <Pill href="/contact">サポート（お問い合わせ）</Pill>
              <Pill href="/donation">寄付・サポーター</Pill>
              <Pill href="/faq">よくある質問</Pill>
              <Pill href="/ai">AI相談チャット</Pill>
              <Pill href="/privacy">プライバシーポリシー</Pill>
              <Pill href="/legal/tokushoho">特定商取引法に基づく表記</Pill>
            </div>
          </section>

          {/* ソーシャル（外部リンク） */}
          <section aria-label="ソーシャル">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">ソーシャル</h2>
            <div className="flex flex-wrap gap-2">
              <a href="https://note.com/clean_minnow118" target="_blank" rel="noopener"
                 className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
                note
              </a>
              <a href="https://bsky.app/" target="_blank" rel="noopener"
                 className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
                Bluesky
              </a>

              {/* NFT メニュー（detailsでJS不要） */}
              <details className="relative">
                <summary className="list-none inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50 cursor-pointer">
                  NFT
                </summary>
                <ul className="absolute z-10 mt-1 min-w-[180px] space-y-1 rounded-md border border-gray-200 bg-white p-2 shadow">
                  <li><a href="https://nft.hexanft.com/users/gdrqieu8SUQLW9" target="_blank" rel="noopener" className="block rounded px-2 py-1 text-sm hover:bg-gray-50">HEXA</a></li>
                  <li><a href="https://opensea.io/ja/collection/project-re-verse" target="_blank" rel="noopener" className="block rounded px-2 py-1 text-sm hover:bg-gray-50">OpenSea</a></li>
                  <li><a href="https://oncyber.io/spaces/0DCUetEBicRPi0fem1WM?coords=-2.07x2.85x5.14x1.58" target="_blank" rel="noopener" className="block rounded px-2 py-1 text-sm hover:bg-gray-50">Oncyber</a></li>
                </ul>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} ACEs Care HUB JAPAN</span>
          <a href="/#pricing" className="underline">サービス・料金</a>
        </div>
      </div>
    </footer>
  );
}
