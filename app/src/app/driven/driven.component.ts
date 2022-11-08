import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css'],
})
export class DrivenComponent implements OnInit {
  @ViewChild('f') mioForm!: NgForm;

  superHero: Hero = new Hero();

  constructor() {}

  ngOnInit() {}

  createHero() {
    console.log(this.superHero);
  }
}
