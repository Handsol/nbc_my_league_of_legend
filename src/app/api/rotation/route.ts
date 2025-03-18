'use server';

import { CHAMPION_DATA_URL, CHAMPION_ROTATION_DATA_URL, RIOT_API_HEADERS } from '@/utils/riot.api';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    // 서버 액션 : 로테이션 데이터
    const rotationResponse = await fetch(CHAMPION_ROTATION_DATA_URL, {
      headers: RIOT_API_HEADERS
    });

    if (!rotationResponse.ok) {
      return NextResponse.json({ error: '로테이션 데이터 불러오기 실패', status: rotationResponse.status });
    }

    const rotationData = await rotationResponse.json();

    // 서버 액션 : 챔피언 데이터
    const championsResponse = await fetch(CHAMPION_DATA_URL);

    if (!championsResponse.ok) {
      return NextResponse.json({ error: '챔피언 데이터 불러오기 실패', status: championsResponse.status });
    }

    const championsData = await championsResponse.json();

    return NextResponse.json({ rotationData, championData: championsData.data });
  } catch {
    return NextResponse.json({ error: '데이터를 불러오기 실패', status: 500 });
  }
};
