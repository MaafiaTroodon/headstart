export interface SponsorItem {
  id: string;
  name: string;
  logoUrl: string;
}

export const sponsors: SponsorItem[] = [
  { id: '2crows', name: '2 Crows Brewing Co.', logoUrl: 'https://picsum.photos/seed/sponsor-2crows-logo/420/140' },
  { id: 'cleves', name: 'Cleve’s Source for Sports', logoUrl: 'https://picsum.photos/seed/sponsor-cleves-logo/420/140' },
  { id: '360fit', name: '360fit', logoUrl: 'https://picsum.photos/seed/sponsor-360fit-logo/420/140' },
  { id: 'ted', name: 'Ted Misztela REALTOR®', logoUrl: 'https://picsum.photos/seed/sponsor-ted-logo/420/140' },
  { id: 'tomavinos', name: 'Tomavinos Ristorante', logoUrl: 'https://picsum.photos/seed/sponsor-tomavinos-logo/420/140' }
];
