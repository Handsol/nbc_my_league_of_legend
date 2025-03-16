'use client';

import { Champion } from '@/types/Champion';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CHAMPION_DATA_URL } from '../api/riot.api';
import Link from 'next/link';
import Image from 'next/image';

const rotationPage = () => {
  // 일반 로테이션 챔피언
  const [rotation, setRotation] = useState<number[]>([]);

  // 챔피언 정보
  const [champions, setChampions] = useState<{ [key: string]: Champion }>({});

  useEffect(() => {
    // 로테이션 챔피언 정보 가져오기
    const fetchRotationChampions = async () => {
      const response = await axios.get('/api/rotation');
      console.log('로테이션 데이터 : ', response.data);
      setRotation(response.data.freeChampionIds);

      // 모든 챔피언 정보 가져오기
      const fetchChampions = await axios.get(CHAMPION_DATA_URL);
      console.log('챔피언 데이터 : ', fetchChampions.data.data);
      setChampions(fetchChampions.data.data);
    };

    fetchRotationChampions();
  }, []);

  return (
    <div className="flex flex-col gap-10 mt-5">
      <h1 className="flex justify-center text-5xl font-bold">로테이션 챔피언</h1>

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
    </div>
  );
};

export default rotationPage;
