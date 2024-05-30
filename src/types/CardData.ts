export interface CardCTA {
  URL: string;
  label: string;
}

export interface CardData {
  id: string;
  category: string;
  title: string;
  ctas: CardCTA[];
  cardImage: string;
  cardAlt: string;
  imageGallery: string[];
}
