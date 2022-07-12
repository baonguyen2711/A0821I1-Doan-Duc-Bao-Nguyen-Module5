import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [
    {word: 'one', mean: 'Một'},
    {word: 'two', mean: 'Hai'},
    {word: 'three', mean: 'Ba'},
    {word: 'four', mean: 'Bốn'},
    {word: 'five', mean: 'Năm'},
  ];

  constructor() {
  }

  getWord(word: string | null) {
    return this.words.find(w => w.word == word);
  }

  getAll() {
    return this.words;
  }
}
