import { Injectable } from '@angular/core';
import data from '../../../assets/exercices/complete-sentences.json';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  completeSentencesDataList: any[] = [];

  constructor() {
    this.getSentences();
  }

  getSentences() {
    this.completeSentencesDataList = data.exercises;
    this.completeSentencesDataList.forEach(x => {
      x.sentence = x.sentence.toString().split(' ');
      x.options = x.options.toString().split(',');
      x.options.forEach((element: string) => {
        element = element.replace(/\s/g, "");
      });
    });
  }
}
