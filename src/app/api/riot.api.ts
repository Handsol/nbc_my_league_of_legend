export const ITEM_DATA_URL = `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json`;
export const CHAMPION_DATA_URL = `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json`;
export const CHAMPION_DETAIL_URL = (id: string) =>
  `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${id}.json`;
export const CHAMPION_ROTATION_DATA_URL = `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations`;
export const RIOT_API_HEADERS = {
  'X-Riot-Token': process.env.RIOT_API_KEY as string
};
