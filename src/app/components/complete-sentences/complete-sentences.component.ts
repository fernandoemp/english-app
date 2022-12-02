import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SystemService } from 'src/app/core/services/system.service';
// import { exercices } from './../../../assets/exercices/complete-sentences.json';
import data from '../../../assets/exercices/complete-sentences.json';

@Component({
  selector: 'app-complete-sentences',
  templateUrl: './complete-sentences.component.html',
  styleUrls: ['./complete-sentences.component.scss']
})
export class CompleteSentencesComponent implements OnInit {
  dataList: any[] = [];
  check: boolean = false;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitzer: DomSanitizer, private systemService: SystemService) {
    // this.registryIcons();
  }

  ngOnInit(): void {
    this.dataList = this.systemService.completeSentencesDataList;   
  }

  checkSentences(){
    this.check = true;
  }

  retry(){
    this.check = false;
  }

  // registryIcons() {
  //   this.matIconRegistry.addSvgIcon(
  //     "plus",
  //     this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg')
  //   );
  // }
}
