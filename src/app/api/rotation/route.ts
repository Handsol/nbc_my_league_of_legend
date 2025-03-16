import { NextResponse } from 'next/server';
import { CHAMPION_ROTATION_DATA_URL, RIOT_API_HEADERS } from '@/app/api/riot.api';

export const GET = async () => {
  const response = await fetch(CHAMPION_ROTATION_DATA_URL, {
    headers: RIOT_API_HEADERS
  });

  const data = await response.json();
  return NextResponse.json(data, { status: 200 });
};
