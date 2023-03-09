import {SupplyType} from "../../../shared/models/supplyType.enum";
import {SupplyColor} from "../../../shared/models/supplyColor.enum";

export class Supply {
  constructor(
    public id: string,
    public model: string,
    public description: string,
    public type: SupplyType,
    public color: SupplyColor,
    public image: string,
    public price: number
  ) {}

}
