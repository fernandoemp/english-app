import { Injectable } from '@angular/core';
import data from '../../../assets/exercices/complete-sentences.json';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  completeTheoryDataList: any[] = [];
  completeSentencesDataList: any[] = [];

  constructor() {
    this.getSentences();
    this.getTheory();
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

  getTheory() {
    this.completeTheoryDataList = data.theory;
    this.completeTheoryDataList.forEach(x => {
      x.examples = x.examples.toString().split('|');
    });
  }
}
