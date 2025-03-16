import { NextResponse } from 'next/server';

const RIOT_API_KEY = process.env.RIOT_API_KEY;

export async function GET() {
  const response = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
    headers: {
      'X-Riot-Token': RIOT_API_KEY as string
    }
  });

  const data = await response.json();
  return NextResponse.json(data, { status: 200 });
}
