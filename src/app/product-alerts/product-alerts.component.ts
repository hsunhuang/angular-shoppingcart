// 設定為接收產品資料,匯入符號 Input
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // @Input() product!: Product;
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  // 使用 @Output() 裝飾器和 EventEmitter() 的例項定義一個名為 notify 的屬性
}
