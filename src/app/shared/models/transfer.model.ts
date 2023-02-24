import {Supply} from "./supply.model";
import {TransferType} from "./transferType.enum";
import {StorageLocation} from "./storageLocation.model";

export class Transfer {
  id: string;
  supplyId: Supply;
  type: TransferType;
  transferDate: Date;
  sourceStorageLocationId: StorageLocation;
  destinationStorageLocationId: StorageLocation;
  quantity: number;
  description: string;

}
