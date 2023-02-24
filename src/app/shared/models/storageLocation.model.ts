import {Warehouse} from "./warehouse.model";

export class StorageLocation {
  id: string;
  shelf: string;
  warehouseId: Warehouse;
  description: string;

}
