import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css'],
})
export class DrivenComponent implements OnInit {
  superHero: Hero = new Hero();

  @ViewChild('f') mioForm!: NgForm;

  constructor() {}

  ngOnInit() {}

  createHero() {
    this.superHero.name = this.mioForm.value.name;
    this.superHero.alterEgo = this.mioForm.value.alterEgo;
    this.superHero.power = this.mioForm.value.power;
    this.superHero.enemy = this.mioForm.value.enemy;
    this.superHero.planet = this.mioForm.value.planet;
    this.superHero.weakness = this.mioForm.value.weakness;
    console.log(this.superHero);
  }
}
