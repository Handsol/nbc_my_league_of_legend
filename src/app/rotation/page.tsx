'use client';

import { Champion } from '@/types/Champion';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CHAMPION_DATA_URL } from '../api/riot.api';
import Link from 'next/link';
import Image from 'next/image';

const rotationPage = () => {
  const [rotation, setRotation] = useState<number[]>([]);
  const [champions, setChampions] = useState<{ [key: string]: Champion }>({});

  useEffect(() => {
    // 로테이션 정보 가져오기
    const fetchRotationChampions = async () => {
      const response = await axios.get('/api/rotation');
      setRotation(response.data.freeChampionIds);

      console.log('로테이션 챔피언 데이터 : ', response.data);

      // ID에 해당하는 챔피언 정보 가져오기
      const fetchChampions = await axios.get(CHAMPION_DATA_URL);

      console.log('챔피언 데이터 : ', fetchChampions.data.data);

      setChampions(fetchChampions.data.data);
    };

    fetchRotationChampions();
  }, []);

  return (
    <div>
      <h1>이번 주 로테이션 챔피언</h1>

      <div className="grid grid-cols-4 gap-4">
        {rotation.map((id) => {
          // 챔피언 ID를 숫자에서 문자열로 변환 후 해당 데이터 찾기
          const champion = Object.values(champions).find((c) => c.id === String(id));

          if (!champion) return null;

          return (
            <Link key={champion.id} href={`/champions/${champion.id}`}>
              <div className="flex flex-col justify-center items-center w-[250px] h-[200px] border-1 gap-3">
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
  );
};

export default rotationPage;
