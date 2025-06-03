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
  imports: [RouterOutlet, RouterLink, NgIf,MatSidenavModule,MatToolbarModule,MatListModule,MatIconModule],
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
          <h1>About Us</h1>
          @defer(on interaction){<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium cursus ante, non pellentesque erat vulputate ac. Duis non posuere lorem. Proin efficitur dolor ac nunc imperdiet interdum. Nullam nulla elit, elementum vitae imperdiet eget, pellentesque vel justo. Donec lacinia sed eros ut consectetur. Fusce lobortis lobortis eros tempus laoreet. Duis euismod, arcu a ultrices mattis, ligula mi hendrerit eros, eget sodales erat velit eget lorem. Suspendisse lobortis gravida ligula, at pellentesque dui ornare at. Morbi iaculis auctor malesuada. Sed volutpat mi eu quam ornare luctus. Phasellus ut ornare augue. Nam vulputate enim massa, non ornare dui commodo sit amet.</p>}
          @placeholder { <p>click to load future text.</p> }
          @loading(minimum 2s){ <p>Future text loading...</p> }
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
export class AboutUsComponent {
  opened:boolean=false;
}
