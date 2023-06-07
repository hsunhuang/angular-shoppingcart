import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // 定義 items 屬性，以便把商品存放在購物車中
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  // 注入 CartService，以便購物車元件可以使用它。
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  //onSubmit() 方法來處理表單。該方法允許使用者提交其姓名和地址
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
