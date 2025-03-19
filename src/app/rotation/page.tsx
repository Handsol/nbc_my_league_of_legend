'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { Champion } from '@/types/Champion';

// 로테이션 데이터 불러오는 로직
const fetchRotationData = async () => {
  const response = await fetch('/api/rotation');
  if (!response.ok) throw new Error('로테이션 데이터를 불러오기 실패함');
  return response.json();
};

const RotationPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['rotationData'],
    queryFn: fetchRotationData
  });

  if (isLoading) return <div className="text-center text-2xl font-bold mt-10">로딩 중...</div>;
  if (error) return <div className="text-center text-red-500 font-bold mt-10">에러 발생: {error.message}</div>;

  const rotation: number[] = data.rotationData?.freeChampionIds || [];
  const newPlayerRotation: number[] = data.rotationData?.freeChampionIdsForNewPlayers || [];
  const champions: Champion[] = data.championData || {};

  return (
    <div className="flex flex-col gap-10 mt-5">
      <h1 className="flex justify-center text-5xl font-bold">이번 주 로테이션 챔피언</h1>

      {/* 일반 로테이션 챔피언 */}
      <div>
        <h2 className="text-2xl font-bold text-center">이번 주 로테이션 챔피언</h2>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {rotation.map((id) => {
            const champion = Object.values(champions).find((c) => Number(c.key) === id);
            if (!champion) return null;

            return (
              <Link key={champion.id} href={`/champions/${champion.id}`}>
                <div className="flex flex-col justify-center items-center w-[250px] h-[200px] border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition">
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
                    alt={champion.name}
                    width={80}
                    height={80}
                  />
                  <p className="font-bold">{champion.name}</p>
                  <p className="text-gray-500">{champion.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 신규 소환사 로테이션 챔피언 */}
      <div>
        <h2 className="text-2xl font-bold text-center">신규 소환사 대상 로테이션 챔피언</h2>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {newPlayerRotation.map((id) => {
            const champion = Object.values(champions).find((c) => Number(c.key) === id);
            if (!champion) return null;

            return (
              <Link key={champion.id} href={`/champions/${champion.id}`}>
                <div className="flex flex-col justify-center items-center w-[250px] h-[200px] border-2 border-blue-400 rounded-lg shadow-md hover:shadow-lg transition">
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
                    alt={champion.name}
                    width={80}
                    height={80}
                  />
                  <p className="font-bold">{champion.name}</p>
                  <p className="text-gray-500">{champion.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RotationPage;
