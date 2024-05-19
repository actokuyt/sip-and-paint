"use client";

import { useRouter } from "next/navigation";

interface ButtonType {
  text: string;
  styles?: string;
  link: string;
}

export default function Button({ text, link, styles }: ButtonType) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/${link}`);
      }}
      className={styles}
    >
      {text}
    </button>
  );
}
