import { Component, OnInit } from '@angular/core';
import { IInventory } from 'src/app/models/IInventory';
import { InventoryService } from 'src/app/services/product/product.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  data: Array<IInventory>;

  constructor(
    private inventory: InventoryService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  private getProducts() {
    return this.inventory.list()
      .subscribe(res => this.data = res)
  }
  public deleteProduct(id: number) {
    this.inventory.delete(id)
      .subscribe(() => {
        this.toast.open({ message: 'Produto Excluido', type: "success" });
        this.getProducts()
      })
  }
  public updateProduct(prod: IInventory | any) {
    const { leave } = prod;
    if (prod.leave > 0) {
      prod.quant = prod.quant - leave;
      const data = {
        ...prod
      }
      return this.inventory.put(data)
        .subscribe(res => {

          this.toast.open({ message: `Quantidade atualizada para ${prod.quant}`, type: "success" });
          res
        })
    }
  }

}
