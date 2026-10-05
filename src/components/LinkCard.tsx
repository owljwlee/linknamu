import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-[28px] border border-white/70 bg-white/40 px-6 py-[18px] text-center text-[15px] font-semibold tracking-[-0.01em] text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_28px_-14px_rgba(196,120,72,0.35)] backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 ease-out hover:border-white/90 hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e08a5a] active:bg-white/70"
    >
      {link.title}
    </a>
  );
}
