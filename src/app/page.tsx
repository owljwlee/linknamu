import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative flex flex-1 justify-center overflow-hidden px-7 py-20 sm:px-8 sm:py-28">
      {/* 은은한 빛 번짐 장식 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ffd9b8]/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#ffc9a8]/40 blur-3xl"
      />

      <div className="relative w-full max-w-sm">
        <ProfileHeader profile={profile} />
        <ul className="mt-12 flex flex-col gap-4">
          {links.map((link, i) => (
            <li
              key={link.id}
              className="animate-fade-up"
              style={{ animationDelay: `${150 + i * 70}ms` }}
            >
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
