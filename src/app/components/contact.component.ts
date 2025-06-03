import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, NgIf,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav mode="side" [(opened)]="opened" class="sidenav">
        
        <mat-nav-list>
          <a mat-list-item routerLink="/home" routerLinkActive="active">Home</a>
          <a mat-list-item routerLink="/about" routerLinkActive="active">About</a>
          <a mat-list-item routerLink="/contact" routerLinkActive="active">Contact Us</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar style="background-color: chocolate">
          <button (click)="opened=!opened">
            <mat-icon>menu</mat-icon>
          </button> 
        </mat-toolbar>
        
        <div class="main-content">
          <h1>Contact Us</h1>
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
  `]
})
export class ContactComponent {
  opened:boolean=false;
}
