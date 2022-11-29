import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareScheduleComponent } from './components/care-schedule/care-schedule.component';
import { CompleteSentencesComponent } from './components/complete-sentences/complete-sentences.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PatientComponent } from './components/patient/patient.component';
import { VitalSignComponent } from './components/vital-sign/vital-sign.component';
import { VitalSignsHistoryComponent } from './components/vital-signs-history/vital-signs-history.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'complete-sentences', component: CompleteSentencesComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'care-schedule', component: CareScheduleComponent },
  { path: 'vital-sign', component: VitalSignComponent },
  { path: 'vital-signs-history', component: VitalSignsHistoryComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
