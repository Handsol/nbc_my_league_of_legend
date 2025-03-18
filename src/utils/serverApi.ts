import { Item } from '@/types/Item';
import { ITEM_DATA_URL } from './riot.api';

// 아이템 정보 불러오기
export const fetchItems = async () => {
  // 24시간마다 정보 갱신 옵션
  const response = await fetch(ITEM_DATA_URL);
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Item[];
};
