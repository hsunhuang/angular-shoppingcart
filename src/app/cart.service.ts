import { Injectable } from '@angular/core';
import { Product } from './products';
//注入 HttpClient 服務到你的服務中, 這樣你的應用可以獲取資料並且與外部 API 和資源互動。
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //把 HttpClient 注入到 CartService 的建構函式中
  constructor(private http: HttpClient) {}
  items: Product[] = [];

  //產品附加到 items 陣列中
  addToCart(product: Product) {
    this.items.push(product);
  }
  //收集使用者加到購物車中的商品，並返回每個商品及其數量
  getItems() {
    return this.items;
  }
  //返回一個空陣列
  clearCart() {
    this.items = [];
    return this.items;
  }

  //呼叫 HttpClient#get() 方法
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
