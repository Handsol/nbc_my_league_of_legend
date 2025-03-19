'use client';

import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('챔피언 페이지 에러 :', error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h2 className="text-2xl font-bold">⚠️ 에러 발생!</h2>
      <p className="text-gray-700">데이터를 불러오는 중 문제가 발생했습니다. 새로고침 한번 해보실래요?</p>

      {/* 새로고침 버튼을 만들어 리렌더링 유도 */}
      <button
        className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-500 transition"
        onClick={() => reset()}
      >
        새로고침 🔄
      </button>
    </div>
  );
}
