import { Item } from '@/types/Item';
import { ITEM_DATA_URL } from '../../utils/riot.api';
import Image from 'next/image';

const fetchItems = async () => {
  // 24시간마다 정보 갱신 옵션
  const response = await fetch(ITEM_DATA_URL);
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Item[];
};

const ItemListPage = async () => {
  const items = await fetchItems();

  return (
    <div className="flex flex-col gap-10 mt-5">
      <h1 className="flex justify-center text-5xl">Item List</h1>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center w-[250px] h-[200px] border-1 gap-3">
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
    </div>
  );
};

export default ItemListPage;
