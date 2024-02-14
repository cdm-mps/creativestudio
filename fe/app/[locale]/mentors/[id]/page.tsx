
"use client"
import { usePathname } from "next/navigation";

export default function MentorPage() {
  const pathname = usePathname();

  return (
    <main className="flex mx-14 pt-11">
      Mentor page with ID: {pathname}
    </main>
  );
}
