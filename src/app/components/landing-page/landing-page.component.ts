import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgParticlesService } from "@tsparticles/angular";
// import {
//   MoveDirection,
//   ClickMode,
//   HoverMode,
//   OutMode,
// } from "@tsparticles/engine";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  router = inject(Router);
  OnGetStarted(){
    this.router.navigateByUrl('/signup');
  }
}
