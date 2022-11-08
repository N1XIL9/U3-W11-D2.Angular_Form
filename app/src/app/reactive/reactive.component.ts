import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      alterEgo: new FormControl(null, Validators.required),
      power: new FormControl(null, Validators.required),
      enemy: new FormControl(null),
      planet: new FormControl(null),
      weakness: new FormControl(null),
    });
  }

  createHero() {
    console.log(this.form);
  }

  // addPower(form) {}
}
