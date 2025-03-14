import { CHAMPION_DETAIL_URL } from '@/app/api/riot.api';
import { Champion } from '@/types/Champion';
import Image from 'next/image';

interface ChampionDetailPageProps {
  params: { id: string };
}

const fetchCampionById = async (id: string) => {
  const response = await fetch(CHAMPION_DETAIL_URL(id), { cache: 'no-store' });
  const jsonData = await response.json();
  return jsonData.data[id] as Champion;
};

const championDetailPage = async ({ params }: ChampionDetailPageProps) => {
  const champion = await fetchCampionById(params.id);

  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <h1 className="text-4xl font-bold">{champion.name}</h1>
      <p className="text-lg italic">{champion.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={200}
        height={200}
      />
      <p className="max-w-2xl text-center">{champion.blurb}</p>
    </div>
  );
};

export default championDetailPage;
