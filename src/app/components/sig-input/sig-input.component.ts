import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sig-input',
  templateUrl: './sig-input.component.html',
  styleUrls: ['./sig-input.component.scss']
})
export class SigInputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() placeholder: string; 
  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  } 
}
