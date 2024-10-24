export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

// Hereda de Guitar (herencia en types)
export type CartItem = Guitar & {
  quantity: number;
};

export type GuitarID = Guitar["id"];
