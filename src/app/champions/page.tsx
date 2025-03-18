import { Champion } from '@/types/Champion';
import { CHAMPION_DATA_URL } from '../../utils/riot.api';
import Image from 'next/image';
import Link from 'next/link';

const fetchChampions = async () => {
  const response = await fetch(CHAMPION_DATA_URL, { next: { revalidate: 86400 } });
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Champion[];
};

const championsListPage = async () => {
  const champions = await fetchChampions();

  return (
    <div className="flex flex-col gap-10 mt-5">
      <h1 className="flex justify-center text-5xl">Champion List</h1>
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
    </div>
  );
};

export default championsListPage;
