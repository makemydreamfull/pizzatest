import {
  Component, ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../services/cart-product.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
  // encapsulation: ViewEncapsulation.None //Делает стили глобальными
})
export class ProductCardComponent {
  @Input() product: ProductType
  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;
  @ViewChild('elem')
  private elem!: ElementRef;
  constructor(public cartProductService: CartProductService) {

    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: '',
    }

  }
}
