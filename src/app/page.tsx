import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-gray-50 px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <ProfileHeader profile={profile} />
        <ul className="mt-8 flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
