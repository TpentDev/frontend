import {SupplyType} from "./supplyType.enum";
import {SupplyColor} from "./supplyColor.enum";

export class Supply {
  id: string;
  model: string;
  description: string;
  type: SupplyType;
  color: SupplyColor;
  image: string;
  price: number;
}
