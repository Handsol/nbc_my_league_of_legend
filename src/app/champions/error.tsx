'use client';

import { useRouter } from 'next/navigation';
import { startTransition, useEffect } from 'react';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error('챔피언 페이지 에러 :', error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h2 className="text-2xl font-bold">⚠️ 에러 발생!</h2>
      <p className="text-gray-700">데이터를 불러오는 중 문제가 발생했습니다. 새로고침 한번 해보실래요?</p>

      {/* startTransition */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onClick={() => startTransition(() => reset())}
      >
        다시 불러오기 🔄
      </button>

      {/* useRouter */}
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        onClick={() => router.refresh()}
      >
        새로고침 🔄
      </button>
    </div>
  );
}
