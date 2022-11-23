import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AngularMaterialModule } from './core/angular-material/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PatientComponent } from './components/patient/patient.component';
import { ConfirmDialogComponent } from './components/shared/confirm-dialog/confirm-dialog.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CareScheduleComponent } from './components/care-schedule/care-schedule.component';
import { ManageArrayDialogComponent } from './components/shared/manage-array-dialog/manage-array-dialog.component';
import { VitalSignComponent } from './components/vital-sign/vital-sign.component';
import { VitalSignsHistoryComponent } from './components/vital-signs-history/vital-signs-history.component';
import { VitalSignDialogComponent } from './components/shared/vital-sign-dialog/vital-sign-dialog.component';
import { CompleteSentencesComponent } from './components/complete-sentences/complete-sentences.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PatientComponent,
    ConfirmDialogComponent,
    LoadingComponent,
    CareScheduleComponent,
    ManageArrayDialogComponent,
    VitalSignComponent,
    VitalSignsHistoryComponent,
    VitalSignDialogComponent,
    CompleteSentencesComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
