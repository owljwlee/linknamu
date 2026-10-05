import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex animate-fade-up flex-col items-center text-center">
      {/* 위는 밝고 아래는 살짝 어두운 테두리 + 겹친 그림자로 입체감 */}
      <div className="rounded-full bg-gradient-to-b from-white to-[#f6d8c2] p-[5px] shadow-[0_2px_4px_rgba(120,72,40,0.10),0_14px_36px_-10px_rgba(196,120,72,0.50)]">
        <div className="relative overflow-hidden rounded-full">
          <Image
            src={profile.imageUrl}
            alt={`${profile.name} 프로필 사진`}
            width={128}
            height={128}
            priority
            unoptimized
            className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_-6px_14px_rgba(80,40,20,0.18),inset_0_4px_10px_rgba(255,255,255,0.35)]"
          />
        </div>
      </div>
      <h1 className="mt-7 text-[26px] font-bold tracking-[-0.02em] text-stone-900">
        {profile.name}
      </h1>
      <p className="mt-2 text-[15px] leading-relaxed tracking-[-0.01em] text-stone-500">
        {profile.bio}
      </p>
    </header>
  );
}
