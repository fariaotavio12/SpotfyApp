interface ExternalUrls {
    spotify: string;
  }
  
  interface Followers {
    href: string | null;
    total: number;
  }
  
  interface Image {
    height: number;
    url: string;
    width: number;
  }
  
  export interface Artist {
    external_urls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }
  
  export interface SpotifySearchResponse {
    href: string;
    items: Artist[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  }
  