import React from "react";

export default function FooterSimplified(): JSX.Element {
  return (
    <footer className="mt-8" id="footer-links">
      <ul className="flex flex-wrap gap-3 list-none p-0">
        <li><a href="https://note.com/clean_minnow118" target="_blank" rel="noopener">note</a></li>
        <li><a href="https://bsky.app/" target="_blank" rel="noopener">Bluesky</a></li>
        <li>
          <details>
            <summary className="cursor-pointer select-none border border-gray-200 bg-white rounded-lg px-2 py-1">
              NFT
            </summary>
            <ul className="mt-2 space-y-1 border border-gray-200 bg-white rounded-lg p-2 shadow">
              <li><a href="https://nft.hexanft.com/users/gdrqieu8SUQLW9" target="_blank" rel="noopener">HEXA</a></li>
              <li><a href="https://opensea.io/ja/collection/project-re-verse" target="_blank" rel="noopener">OpenSea</a></li>
              <li><a href="https://oncyber.io/spaces/0DCUetEBicRPi0fem1WM?coords=-2.07x2.85x5.14x1.58" target="_blank" rel="noopener">Oncyber</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </footer>
  );
}
