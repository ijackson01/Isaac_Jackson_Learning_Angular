import { Song } from '../models/song';

export const MOCK_SONGS: Song[] = [
  { id: 1, title: 'End of Beginning', artist: 'Djo', genre: 'Indie', durationSeconds: 240 },
  { id: 2, title: 'Die With a Smile', artist: 'Lady Gaga & Bruno Mars', genre: 'Pop', durationSeconds: 251 },
  { id: 3, title: 'Ordinary', artist: 'Alex Warren', genre: 'Pop', durationSeconds: 222 },
  { id: 4, title: 'Riptide', artist: 'Vance Joy', genre: 'Indie Folk', durationSeconds: 204 },
  { id: 5, title: 'Counting Stars', artist: 'OneRepublic', genre: 'Pop Rock', durationSeconds: 257 },
  { id: 6, title: 'La Fiesta de Pilito', artist: 'El Gran Combo De Puerto Rico', genre: 'Party / Latin', durationSeconds: 180, album: 'La Fiesta' }
];
