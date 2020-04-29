import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/app/services/product/product.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'receivement',
  templateUrl: './receivement.component.html',
  styleUrls: ['./receivement.component.scss']
})
export class ReceivementComponent implements OnInit {
  prodId: number = this.route.snapshot.params['id']

  productForm = this.fb.group({
    description: ['', Validators.required],
    quant: ['', Validators.required],
  });

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute,
    private inventory: InventoryService,
    private toast: ToastService) { }
  ngOnInit(): void {
    this.getProd();
  }
  private getProd() {
    if (this.prodId != 0) {
      return this.inventory.get(this.prodId)
        .subscribe(res => {
          const { description, quant } = res;
          this.productForm.patchValue({ description, quant })
        })
    }
    return
  }
  onFormSubmit(): void {
    if (this.productForm.valid) {
      if (this.prodId != 0) {
        this.update()
      } else {
        this.create()
      }
    }
  }
  private create() {
    const data = {
      id: `P${Math.floor(Math.random() * (2000 - 1000)) + 1000}`,
      ...this.productForm.value,
      unity: 'kg',
      input: new Date(),
    }
    return this.inventory.post(data)
      .subscribe(res => this.onSuccess())
  }
  private update() {
    const data = {
      id: this.prodId,
      ...this.productForm.value,
      unity: 'kg',
      input: new Date(),
    }
    return this.inventory.put(data)
      .subscribe(res => this.onSuccess())
  }
  private onSuccess() {
    this.toast.open({ message: 'Adicionado com sucesso!', type: "success" });
    this.router.navigate(['/inventory'])
  }
}

