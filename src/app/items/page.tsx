import { Item } from '@/types/Item';
import { ITEM_DATA_URL } from '../api/riot.api';

const fetchItems = async () => {
  const response = await fetch(ITEM_DATA_URL);
  const jsonData = await response.json();
  return Object.values(jsonData.data) as Item[];
};

const ItemListPage = async () => {
  const items = await fetchItems();

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.plaintext}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListPage;
