import { Component, OnInit } from '@angular/core';
import {Supply} from "../../../shared/models/supply.model";
import {Printer} from "../model/printer.model";
import {PrinterService} from "../service/printer.service";

@Component({
  selector: 'app-printer-list',
  templateUrl: './printer-list.component.html',
  styleUrls: ['./printer-list.component.scss']
})
export class PrinterListComponent implements OnInit {
  printers: Printer[] = [];

  constructor(private printerService: PrinterService) { }

  ngOnInit(): void {
    this.printerService.fetchPrinters(0, 25, 'MODEL', 'ASC').subscribe((printers: Printer[]) => {
      console.log(printers);
      this.printers.push(...printers);
    });
  }

}
