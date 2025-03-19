'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error('전역 에러 발생:', error);
  }, [error]);

  return (
    <html>
      <body className="flex flex-col justify-center items-center h-screen text-center bg-gray-100">
        <h2 className="text-3xl font-bold">🚨 시스템 에러 발생</h2>
        <p className="text-gray-700">예상하지 못한 오류가 발생했습니다. 다시 시도해 주세요.</p>
        <div className="mt-5 flex gap-4">
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            onClick={() => reset()}
          >
            새로고침 🔄
          </button>
          <button
            className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
            onClick={() => router.push('/')}
          >
            메인 페이지
          </button>
        </div>
      </body>
    </html>
  );
}
