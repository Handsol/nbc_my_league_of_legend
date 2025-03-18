'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Champion } from '@/types/Champion';

const rotationPage = () => {
  const [rotation, setRotation] = useState<number[]>([]);
  const [newPlayerRotation, setNewPlayerRotation] = useState<number[]>([]);
  const [champions, setChampions] = useState<{ [key: string]: Champion }>({});

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        const response = await fetch('/api/rotation');
        const data = await response.json();

        setRotation(data.rotationData?.freeChampionIds || []);
        setNewPlayerRotation(data.rotationData?.freeChampionIdsForNewPlayers || []);
        setChampions(data.championData || {});
      } catch (error) {
        console.error('로테이션 데이터 불러오기 실패 : ', error);
      }
    };

    fetchRotationData();
  }, []);

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

export default rotationPage;
