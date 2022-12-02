import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EN-LEARN APP';

  constructor(private localStorageService: LocalStorageService, private matIconRegistry: MatIconRegistry, private domSanitzer: DomSanitizer) {

  }
  ngOnInit(): void {
    // this.localStorageService.setItem('patientId', 1);
    // this.localStorageService.setItem('vitalSignId', 1);
    this.registryIcons()
  }

  registryIcons() {
    this.matIconRegistry.addSvgIcon(
      "exercise",
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/exercise.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "ok",
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/ok.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "error",
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/error.svg')
    );
  }
}
