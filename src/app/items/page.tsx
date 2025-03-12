import { Item } from '@/types/Item';
import { ITEM_DATA_URL } from '../api/riot.api';
import Image from 'next/image';

const fetchItems = async () => {
  // 24시간마다 정보 갱신 옵션
  const response = await fetch(ITEM_DATA_URL, { next: { revalidate: 86400 } });
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Item[];
};

const ItemListPage = async () => {
  const items = await fetchItems();

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
            alt={item.name}
            width={30}
            height={30}
          />
          <p>{item.name}</p>
          <p>{item.plaintext}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListPage;
