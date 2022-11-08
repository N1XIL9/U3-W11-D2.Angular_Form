import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      name: new FormControl(null),
      alterEgo: new FormControl(null),
      power: new FormControl(null),
      enemy: new FormControl(null),
      planet: new FormControl(null),
      weakness: new FormControl(null),
    });
  }

  createHero() {
    console.log(this.form);
  }
}
