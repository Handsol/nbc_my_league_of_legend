import { CHAMPION_DETAIL_URL } from '@/app/api/riot.api';
import { ChampionDetail } from '@/types/ChampionDetail';
import Image from 'next/image';

interface ChampionDetailPageProps {
  params: { id: string };
}

const fetchCampionDetail = async (id: string): Promise<ChampionDetail> => {
  const response = await fetch(CHAMPION_DETAIL_URL(id), { cache: 'no-store' });
  const jsonData = await response.json();
  return jsonData.data[id] as ChampionDetail;
};

const championDetailPage = async ({ params }: ChampionDetailPageProps) => {
  const champion = await fetchCampionDetail(params.id);

  return (
    <div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt={champion.name}
        width={800}
        height={400}
      />

      <h1>{champion.name}</h1>
      <p>{champion.title}</p>
      <p>{champion.blurb}</p>

      {/* 패시브 스킬 */}
      <div>
        <h2>패시브</h2>
        <div>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/passive/${champion.passive.image.full}`}
            alt={champion.passive.name}
            width={64}
            height={64}
          />
          <div>
            <h3>{champion.passive.name}</h3>
            <p>{champion.passive.description}</p>
          </div>
        </div>
      </div>

      {/* 액티브 스킬 */}
      <div>
        <h2>스킬</h2>
        <div>
          {champion.spells.map((spell) => (
            <div key={spell.id}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell/${spell.image.full}`}
                alt={spell.name}
                width={64}
                height={64}
              />
              <div>
                <h3>{spell.name}</h3>
                <p>{spell.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default championDetailPage;
