import {Component, OnInit} from '@angular/core';
import {ApiService} from "../shared/services/api.service";
import {Printer} from "../shared/models/printer.model";
import {Supply} from "../shared/models/supply.model";
// import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
//
// export interface DialogData {
//   name: string;
//   description: string;
// }

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  printers: Printer[] = [];
  supplies: Supply[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  // openDialog(printer: Printer): void {
  //   const dialogRef = this.dialog.open(PrinterDialog, {
  //     width: '250px',
  //     data: {name: printer.model, description: printer.description}
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.printer = result;
  //   });
  // }

  ngOnInit() {
    this.apiService.fetchPrinters(0, 25, 'MODEL', 'ASC').subscribe((printers: Printer[]) => {
      console.log(printers);
      this.printers.push(...printers);
    });

    this.apiService.fetchSupplies(0, 25, 'MODEL', 'ASC').subscribe((supplies: Supply[]) => {
      console.log(supplies);
      this.supplies.push(...supplies);
    });
  }

  getColor(color) {
    switch (color) {
      case 'Black':
        return '⬛';
      case 'Magenta':
        return '🟥';
      case 'Cyan':
        return '🟦';
      case 'Yellow':
        return '🟨';
    }
  }
}

// @Component({
//   selector: 'printer-dialog',
//   templateUrl: 'printer-dialog.html',
// })
// export class PrinterDialog {
//
//   constructor(
//     public dialogRef: MatDialogRef<PrinterDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
//
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//
// }
