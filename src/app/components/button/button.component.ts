import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sig-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btn: string = "btn";
  @Input() type: string;
  constructor() { }

  ngOnInit(): void {
  }

}
