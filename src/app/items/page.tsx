import { Item } from '@/types/Item';
import { ITEM_DATA_URL } from '../api/riot.api';

const itemListPage = async () => {
  const response = await fetch(ITEM_DATA_URL);
  const data: Item[] = await response.json();

  return <div>itemListPage ${JSON.stringify(data)}</div>;
};

export default itemListPage;
