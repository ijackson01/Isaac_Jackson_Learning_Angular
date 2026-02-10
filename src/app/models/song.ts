export type SongGenre =
  | 'Indie'
  | 'Pop'
  | 'Indie Folk'
  | 'Pop Rock'
  | 'Party / Latin';

export interface Song {

  id: number;
  title: string;
  artist: string;
  genre: SongGenre;
  durationSeconds: number;
  album?: string;
  imageUrl: string;
}
