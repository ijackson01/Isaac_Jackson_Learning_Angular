import { Song } from '../models/song';

export const MOCK_SONGS: Song[] = [
  {
    id: 1,
    title: 'End of Beginning',
    artist: 'Djo',
    genre: 'Indie',
    durationSeconds: 240,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Djo_-_End_of_Beginning_single_cover.png'
  },
  {
    id: 2,
    title: 'Die With a Smile',
    artist: 'Lady Gaga & Bruno Mars',
    genre: 'Pop',
    durationSeconds: 251,
    imageUrl: 'https://cdn-images.dzcdn.net/images/cover/4bd5903f4ce8f2601916bfadb44efe8a/500x500-000000-80-0-0.jpg'
  },
  {
    id: 3,
    title: 'Ordinary',
    artist: 'Alex Warren',
    genre: 'Pop',
    durationSeconds: 222,
    imageUrl: 'https://akamai.sscdn.co/letras/360x360/albuns/d/9/0/0/2915781743105860.jpg'
  },
  {
    id: 4,
    title: 'Riptide',
    artist: 'Vance Joy',
    genre: 'Indie Folk',
    durationSeconds: 204,
    imageUrl: 'https://cdn-images.dzcdn.net/images/cover/d3f67e81d134e4036fd2e68a062210c4/500x500-000000-80-0-0.jpg'
  },
  {
    id: 5,
    title: 'Counting Stars',
    artist: 'OneRepublic',
    genre: 'Pop Rock',
    durationSeconds: 257,
    imageUrl: 'https://cdn-images.dzcdn.net/images/cover/016f3117546e2bcc4229142c7268fb04/500x500-000000-80-0-0.jpg'
  },
  {
    id: 6,
    title: 'La Fiesta de Pilito',
    artist: 'El Gran Combo De Puerto Rico',
    genre: 'Party / Latin',
    durationSeconds: 180,
    album: 'La Fiesta',
    imageUrl: 'https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2F2118054789006915e49d36c21db16cda.939x956x1.jpg'
  }
];
