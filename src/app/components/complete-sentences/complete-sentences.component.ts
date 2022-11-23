import { Component, OnInit } from '@angular/core';
// import { exercices } from './../../../assets/exercices/complete-sentences.json';
import data from '../../../assets/exercices/complete-sentences.json';

@Component({
  selector: 'app-complete-sentences',
  templateUrl: './complete-sentences.component.html',
  styleUrls: ['./complete-sentences.component.scss']
})
export class CompleteSentencesComponent implements OnInit {
  dataList: any[] = data.exercises;
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataList)
    this.dataList.forEach(x=> {
    x.sentence = x.sentence.toString().split(' ');
    x.options = x.options.toString().split(',');

    })
  }

}
