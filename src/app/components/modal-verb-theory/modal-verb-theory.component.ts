import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SystemService } from 'src/app/core/services/system.service';
// import { exercices } from './../../../assets/exercices/complete-sentences.json';

@Component({
  selector: 'app-modal-verb-theory',
  templateUrl: './modal-verb-theory.component.html',
  styleUrls: ['./modal-verb-theory.component.scss']
})
export class ModalVerbTheoryComponent implements OnInit {

  data: any[] = [];
  dataList: any[] = [];
  check: boolean = false;
  isExercises: boolean;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitzer: DomSanitizer, private systemService: SystemService) { 
    this.isExercises = false;
  }

  ngOnInit(): void {
    this.data = this.systemService.completeTheoryDataList;
    this.dataList = this.systemService.completeSentencesDataList; 
  }

  goExercises(){
    this.isExercises = true;
  }

  checkSentences(){
    this.check = true;
  }

  retry(){
    this.check = false;
    this.dataList.forEach(item => {
      item.answer = "";
    });
  }

  valid(){
    var isValid = true;
    this.dataList.forEach(item => {
      if(item.answer === ""){
        isValid = false;
      }
    });
    return isValid;
  }

  resetCheck(){
    this.check = false;
  }

  backTheory(){
    this.isExercises = false;
  }

}
