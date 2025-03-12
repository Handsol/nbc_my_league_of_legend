import { Champion } from '@/types/Champion';
import { CHAMPION_DATA_URL } from '../api/riot.api';

const fetchChampions = async () => {
  const response = await fetch(CHAMPION_DATA_URL);
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Champion[];
};

const championsListPage = async () => {
  const champions = await fetchChampions();

  return <div>챔피언 페이지</div>;
};

export default championsListPage;
