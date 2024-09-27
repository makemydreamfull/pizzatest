import { Pipe, PipeTransform } from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Pipe({
  name: 'chickenProduct'
})
export class ChickenProductsPipe implements PipeTransform {

  transform(products: ProductType[]): ProductType[] {
    return products.filter(item => {
      return item.title.toLowerCase().includes('кур');
    });
  }

}
