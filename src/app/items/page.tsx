import { fetchItems } from '@/utils/serverApi';
import Image from 'next/image';
import { Suspense } from 'react';

const ItemListPage = async () => {
  const items = await fetchItems();

  return (
    <div className="flex flex-col gap-10 mt-5">
      <h1 className="flex justify-center text-5xl">Item List</h1>

      <Suspense fallback={<p className="text-center text-gray-500">로딩 중...</p>}>
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
      </Suspense>
    </div>
  );
};

export default ItemListPage;
