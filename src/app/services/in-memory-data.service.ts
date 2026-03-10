import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Song } from '../models/song';
import { MOCK_SONGS } from '../data/mock-content';

export class InMemoryDataService implements InMemoryDbService {

  createDb(): { songs: Song[] } {

    const songs: Song[] = MOCK_SONGS;

    return { songs };
  }

}
