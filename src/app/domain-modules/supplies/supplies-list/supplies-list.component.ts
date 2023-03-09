import { Component, OnInit } from '@angular/core';
import { Supply } from "../../../shared/models/supply.model";
import {SupplyService} from "../service/supply.service";

@Component({
  selector: 'app-supplies-list',
  templateUrl: './supplies-list.component.html',
  styleUrls: ['./supplies-list.component.scss']
})
export class SuppliesListComponent implements OnInit {
  supplies: Supply[] = [];

  constructor(private supplyService: SupplyService) { }

  ngOnInit() {
    this.supplyService.fetchSupplies(0, 25, 'MODEL', 'ASC').subscribe((supplies: Supply[]) => {
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
