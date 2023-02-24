import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/services/api.service";
import {Printer} from "../shared/models/printer.model";
import {Supply} from "../shared/models/supply.model";

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
