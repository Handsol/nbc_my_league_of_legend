import { Item } from '@/types/Item';
import { CHAMPION_DATA_URL, ITEM_DATA_URL } from './riot.api';
import { Champion } from '@/types/Champion';

// 아이템 정보 불러오기
export const fetchItems = async () => {
  // 24시간마다 정보 갱신 옵션
  const response = await fetch(ITEM_DATA_URL);
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Item[];
};

export const fetchChampions = async () => {
  const response = await fetch(CHAMPION_DATA_URL, { next: { revalidate: 86400 } });
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Champion[];
};
