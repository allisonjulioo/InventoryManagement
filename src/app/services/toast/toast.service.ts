import { Injectable, OnInit } from '@angular/core';

export interface IToast {
  message: string,
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  template: any;
  constructor() { }
  public async open(params?: IToast) {
    const toast = await document.querySelector(".toast");
    const { message, type } = params;
    this.template = await `
    <div class="toast"> 
      <div class="toast-content ${type}"> 
        <p class="message">${message}</p>
      </div>
    </div>
    `

    await document.querySelector('body').insertAdjacentHTML('beforeend', this.template); 
    setTimeout(() => [
      document.querySelector(".toast .toast-content")
        .remove()
    ], 2500)
  }
}
