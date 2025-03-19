import Image from 'next/image';
import Link from 'next/link';
import { fetchChampions } from '@/utils/serverApi';
import { Suspense } from 'react';

const championsListPage = async () => {
  const champions = await fetchChampions();

  return (
    <div className="flex flex-col gap-10 mt-5">
      <h1 className="flex justify-center text-5xl">Champion List</h1>

      <Suspense fallback={<p className="text-center text-gray-500">로딩 중...</p>}>
        <div className="grid grid-cols-4 gap-4">
          {champions.map((champion) => (
            <Link key={champion.id} href={`/champions/${champion.id}`}>
              <div className="flex flex-col justify-center items-center w-[250px] h-[200px] border-1 gap-3">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
                  alt={champion.name}
                  width={30}
                  height={30}
                />
                <p>{champion.name}</p>
                <p>{champion.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default championsListPage;
