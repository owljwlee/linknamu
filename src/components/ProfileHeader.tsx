import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.imageUrl}
        alt={`${profile.name} 프로필 사진`}
        width={128}
        height={128}
        priority
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-md sm:h-32 sm:w-32"
      />
      <h1 className="mt-5 text-xl font-bold text-gray-900">{profile.name}</h1>
      <p className="mt-1 text-sm text-gray-600">{profile.bio}</p>
    </header>
  );
}
