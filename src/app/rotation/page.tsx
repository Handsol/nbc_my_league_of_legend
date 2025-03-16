'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const rotationPage = () => {
  const [rotation, setRotation] = useState<number[]>([]);

  useEffect(() => {
    const fetchRotationChampions = async () => {
      const response = await axios.get('/api/rotation');
      setRotation(response.data.freeChampionIds);
    };

    fetchRotationChampions();
  }, []);

  return (
    <div>
      <h1>이번 주 로테이션 챔피언</h1>

      <div>
        {rotation.map((id) => (
          <div key={id}>
            <p>챔피언 id: {id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default rotationPage;
