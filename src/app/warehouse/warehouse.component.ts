import {Component, Inject, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})

export class WarehouseComponent implements OnInit {

  formData = {
    name: '',
    email: ''
  };
  constructor(
    private dialog: MatDialog,

    public dialogRef: MatDialogRef<WarehouseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogRef = this.dialog.open(WarehouseComponent, {
      data: {
        formData: this.formData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal closed');
    });
  }

  submitForm() {
    // Handle form submission here
    // ...
    // Close the modal and emit an event or return a value
    this.dialogRef.close();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
