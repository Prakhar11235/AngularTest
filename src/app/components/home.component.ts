import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav mode="side" [(opened)]="opened" class="sidenav">
        
        <mat-nav-list>
          <div class="list">
            <div class="top">
              <a mat-list-item routerLink="/home" routerLinkActive="active">Home</a>
              <a mat-list-item routerLink="/about" routerLinkActive="active">About</a>
              <a mat-list-item routerLink="/contact" routerLinkActive="active">Contact Us</a>
            </div>
            <div class="bottom">
              <a mat-list-item routerLink="/" routerLinkActive="active">Log Out</a>
            </div>
          </div>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar style="background-color: chocolate">
          <button (click)="opened=!opened">
            <mat-icon>menu</mat-icon>
          </button>
          
          
        </mat-toolbar>
        <div class="main-content">
          <h1>Home Page</h1>
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: 100vh;
    }
    .sidenav {
      width: 200px;
    }
    .main-content {
      padding: 16px;
    }
    .active {
      font-weight: bold;
      color: #d35400;
    }
    .list{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      height:100vh;
    }
  `]
})
export class HomeComponent {
  opened:boolean=false;
}
