import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../../core/classes/patient.class';
import { VitalSign } from '../../core/classes/vital-sign.class';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { PatientService } from '../../core/services/patient.service';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { VitalSignDialogComponent } from '../shared/vital-sign-dialog/vital-sign-dialog.component';

@Component({
  selector: 'app-vital-signs-history',
  templateUrl: './vital-signs-history.component.html',
  styleUrls: ['./vital-signs-history.component.scss']
})
export class VitalSignsHistoryComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  displayedColumns: string[];
  dataSource!: MatTableDataSource<VitalSign>;
  // categories: CategoryClass[];
  // productsSubscription!: Subscription;
  // categoriesSubscription!: Subscription;
  loading: boolean;
  selectedPatient = new Patient();

  constructor(
    private _patientService: PatientService,
    public matDialog: MatDialog, private _toastr: ToastrService, private router: Router, private localStorageService: LocalStorageService
  ) {
    this.displayedColumns = [
      // "id",

      "date",
      "bloodPressure",
      "breathing",
      "pulse",
      "temperature",

      // 'stock',
      // 'category',
      // 'description',
      "observation",
      "professional"
    ];
    // this.categories = [];
    this.loading = true;
  }

  ngOnInit(): void {
    this.selectedPatient = this.localStorageService.getItem('selectedPatient');
    this.getAllHistories();
    // this.getAllCategories();
  }

  getAllHistories() {
    this.dataSource = new MatTableDataSource(this.selectedPatient.vitalSigns);
    console.log(this.selectedPatient.vitalSigns)
    this.loading = false;
  }

  applyFilter(searched: string) {
    console.log(searched)
    if (searched != '') {
      this.dataSource.data = this.selectedPatient.vitalSigns;
      console.log(this.dataSource.data.filter(e => e.date.toString().slice(0, 10) == searched))
      this.dataSource.data = this.dataSource.data.filter(e => e.date.toString().slice(0, 10) == searched);
    }
    else {
      this.dataSource.data = this.selectedPatient.vitalSigns;
    }
  }

  add() {
    let vitalSign = new VitalSign();
    const dialogRef = this.matDialog.open(VitalSignDialogComponent, {
      disableClose: true, panelClass: 'custom-container-equals-border-radius',
      data: { title: 'Add Vital Sign', vitalSign: vitalSign, update: false },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.selectedPatient.vitalSigns.push(result);
        let patients = this._patientService.getAllPatients();
        let index = patients.findIndex(x => x.id == this.selectedPatient.id);
        if(index != -1){
          patients.splice(index, 1, this.selectedPatient);
          this._patientService.updatePatients(patients);
          this.localStorageService.setItem('selectedPatient', this.selectedPatient);
          this._toastr.info("Added vital signs");
          this.getAllHistories();
        }
      }
    });
  }

  update(patient: Patient) {
    // const dialogRef = this.dialog.open(PatientDialogComponent, {
    //   disableClose: true, panelClass: 'custom-container-equals-border-radius',
    //   data: { title: 'Modify Patient', patient: patient, update: true },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result !== undefined) {
    //     this.openConfirmDialog(
    //       result.patient,
    //       'Do you want to modify the next patient?',
    //       `Id: ${result.product.id} \nName: ${result.patient.name} \nCategoria: ${result.product.category?.name} \nPrecio: $${result.product.price} \nStock: ${result.product.stock} \nDescripcion: ${result.product.description}`,
    //       2
    //     );
    //   }
    // });
    this.localStorageService.setItem('selectedPatient', patient);
    this.router.navigate(['patient']);
  }

  delete(patient: Patient) {
    this.openConfirmDialog(
      patient,
      'Do you want to delete the next patient?',
      `First Name: ${patient.firstName} \nLast Name: ${patient.firstName} \nOther Data: bla bla bla`,
      3
    );
  }

  openConfirmDialog(
    product: Patient,
    title: string,
    content: string,
    option: number
  ): void {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      disableClose: true, panelClass: 'custom-container-equals-border-radius',
      data: { title: title, content: content },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // switch (option) {
        //   case 1:
        //     this._patientService.addProduct(product).subscribe(
        //       (result) => {
        //         this.getAllProducts();
        //         this._toastr.success('Producto agregado con exito');
        //       },
        //       (error) => {
        //         console.log(error);
        //       }
        //     );
        //     break;
        //   case 2:
        //     this._patientService.updateProduct(product).subscribe(
        //       (result) => {
        //         this.getAllProducts();
        //         this._toastr.success('Producto modificado con exito');
        //       },
        //       (error) => {
        //         console.log(error);
        //       }
        //     );
        //     break;
        //   case 3:
        //     this._patientService.deleteProduct(product.id).subscribe(
        //       (result) => {
        //         this.getAllProducts();
        //         this._toastr.success('Producto eliminado con exito');
        //       },
        //       (error) => {
        //         console.log(error);
        //       }
        //     );
        //     break;
        // }
      }
    });
  }

  goToHours() {
    this.router.navigate(['care-schedule']);
  }

}