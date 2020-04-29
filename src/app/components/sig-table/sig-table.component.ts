import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInventory } from 'src/app/models/IInventory';
import { InventoryService } from 'src/app/services/product/product.service';


@Component({
  selector: 'sig-table',
  templateUrl: './sig-table.component.html',
  styleUrls: ['./sig-table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: Array<IInventory>;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() update: EventEmitter<IInventory> = new EventEmitter();
  leaveQuant: number = 0;
  index: number = null;
  constructor(private inventory: InventoryService) { }

  ngOnInit(): void {
  }
  public onDelete(id: number): void {
    this.delete.emit(id);
  }
  public onUpdate(prod: IInventory): void {
    const leave = this.leaveQuant;
    Object.assign(prod, { leave })
    this.update.emit(prod);
    this.leaveQuant = 0;
  }
  public toggleOpen(index: number) {
    if (this.index === index) {
      this.index = null;
    } else {
      this.index = index;
    }
    this.leaveQuant = 0;
  }


}
