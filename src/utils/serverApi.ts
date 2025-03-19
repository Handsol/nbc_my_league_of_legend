import { Item } from '@/types/Item';
import { CHAMPION_DATA_URL, CHAMPION_DETAIL_URL, ITEM_DATA_URL } from './riot.api';
import { Champion } from '@/types/Champion';
import { ChampionDetail } from '@/types/ChampionDetail';

// 아이템 정보 불러오기
export const fetchItems = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // 24시간마다 정보 갱신 옵션
  const response = await fetch(ITEM_DATA_URL);
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Item[];
};

// 챔피언 정보 불러오기
export const fetchChampions = async () => {
  const response = await fetch(CHAMPION_DATA_URL, { next: { revalidate: 86400 } });
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Champion[];
};

// 챔피언 상세 정보 params 선언
export interface ChampionDetailPageProps {
  params: { id: string };
}

// 챔피언 상세 정보 불러오기
export const fetchChampionDetail = async (id: string): Promise<ChampionDetail> => {
  const response = await fetch(CHAMPION_DETAIL_URL(id), { cache: 'no-store' });
  const jsonData = await response.json();
  return jsonData.data[id] as ChampionDetail;
};
