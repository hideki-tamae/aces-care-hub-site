import React from "react";
import Link from "next/link";

const IPill = ({href, children}:{href:string; children:React.ReactNode}) => (
  <Link href={href} className="inline-flex items-center rounded-md border border-gray-200 px-3 py-1.5 text-sm hover:bg-gray-50">
    {children}
  </Link>
);
const EPill = ({href, children}:{href:string; children:React.ReactNode}) => (
  <a href={href} target="_blank" rel="noopener" className="inline-flex items-center rounded-md border border-gray-200 px-3 py-1.5 text-sm hover:bg-gray-50">
    {children}
  </a>
);

export default function FooterSimplified(): JSX.Element {
  return (
    <footer className="not-prose border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* 1段にすべてまとめる（内部→外部の順で並ぶが横幅が狭いと折り返し） */}


        <div className="flex flex-wrap items-center gap-2">
          {/* 内部リンク（必須） */}
          <IPill href="/contact">サポート（お問い合わせ）</IPill>
          <IPill href="/donation">寄付・サポーター</IPill>
          <IPill href="/faq">よくある質問</IPill>
          <IPill href="/ai">AI相談チャット</IPill>
          <IPill href="/privacy">プライバシーポリシー</IPill>
          <IPill href="/legal/tokushoho">特定商取引法に基づく表記</IPill>

          <span className="mx-2 text-gray-300">|</span>

          {/* 外部リンク（順序：Bluesky → note → NFT） */}
          <EPill href="https://bsky.app/">Bluesky</EPill>
          <EPill href="https://note.com/clean_minnow118">note</EPill>
          <span className="text-sm text-gray-600 ml-1 mr-1">NFT</span>
          <EPill href="https://nft.hexanft.com/users/gdrqieu8SUQLW9">HEXA</EPill>
          <EPill href="https://opensea.io/ja/collection/project-re-verse">OpenSea</EPill>
          <EPill href="https://oncyber.io/spaces/0DCUetEBicRPi0fem1WM?coords=-2.07x2.85x5.14x1.58">Oncyber</EPill>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} ACEs Care HUB JAPAN</span>
          <a href="/#pricing" className="underline">サービス・料金</a>
        </div>
      </div>
    </footer>
  );
}
