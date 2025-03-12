export interface Item {
  name: string;
  description: string;
  plaintext: string;
  gold: {
    base: number;
    total: number;
    sell: number;
  };
  tags: string[];
  colloq: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}
