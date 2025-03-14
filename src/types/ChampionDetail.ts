export interface ChampionDetail {
  id: string;
  name: string;
  title: string;
  blurb: string;
  spells: {
    id: string;
    name: string;
    description: string;
    image: {
      full: string;
    };
  }[];
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
}
