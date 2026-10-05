"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0회로 보여 줍니다.
  const [counts, setCounts] = useState<Counts>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { signal: controller.signal })
      .then((res) => (res.ok ? (res.json() as Promise<Counts>) : null))
      .then((data) => {
        // 받는 사이에 눌린 클릭이 사라지지 않도록 더 큰 값을 유지합니다.
        if (data) {
          setCounts((prev) => {
            const next = { ...data };
            for (const [id, n] of Object.entries(prev)) {
              next[id] = Math.max(next[id] ?? 0, n);
            }
            return next;
          });
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 반영하고, 저장은 새 탭이 열려도 끝까지 보내지도록 keepalive 사용
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${encodeURIComponent(id)}`, {
      method: "POST",
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <ul className="mt-12 flex flex-col gap-4">
      {links.map((link, i) => (
        <li
          key={link.id}
          className="animate-fade-up"
          style={{ animationDelay: `${150 + i * 70}ms` }}
        >
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
