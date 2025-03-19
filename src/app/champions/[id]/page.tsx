import { ChampionDetailPageProps, fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const championDetailPage = async ({ params }: ChampionDetailPageProps) => {
  const { id } = await params;
  const champion = await fetchChampionDetail(id);

  if (!champion) {
    return <div className="text-center text-red-500">챔피언을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      {/* 챔피언 목록으로 돌아가기 버튼 */}

      <Link href="/champions" className="mt-3 ml-3">
        <button className="px-4 py-2 bg-black bg-opacity-60 text-white rounded-md hover:bg-opacity-80 transition cursor-pointer">
          ← 목록으로 돌아가기
        </button>
      </Link>

      <Suspense fallback={<p className="text-center text-gray-500">로딩 중...</p>}>
        <div className="flex flex-col items-center gap-5 mt-10">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
            alt={champion.name}
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />

          <h1 className="text-4xl font-bold">{champion.name}</h1>
          <p className="text-lg italic">{champion.title}</p>
          <p className="max-w-2xl text-center">{champion.blurb}</p>

          {/* 패시브 스킬 */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold">패시브</h2>
            <div className="flex items-center gap-4">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/passive/${champion.passive.image.full}`}
                alt={champion.passive.name}
                width={64}
                height={64}
              />
              <div>
                <h3 className="font-bold">{champion.passive.name}</h3>
                <p>{champion.passive.description}</p>
              </div>
            </div>
          </div>

          {/* 액티브 스킬 */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold">스킬</h2>
            <div className="grid grid-cols-2 gap-4">
              {champion.spells.map((spell) => (
                <div key={spell.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell/${spell.image.full}`}
                    alt={spell.name}
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="font-bold">{spell.name}</h3>
                    <p>{spell.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default championDetailPage;
