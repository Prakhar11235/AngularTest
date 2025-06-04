import { Component,OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


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
    MatButtonModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  templateUrl:'./home.component.html',
  styleUrl:'./home.component.css',
})
export class HomeComponent implements OnInit {
  opened:boolean=false;
  quote:String='';
  author:String='';
  constructor(private http: HttpClient) { }
  ngOnInit() {      
        this.http.get<any>('/api/random',{responseType: 'json'}).subscribe({
          next: res =>{
            this.quote = res[0].q;
            this.author=res[0].a;
            console.log(this.quote);
            console.log(this.author);
            //console.log(res);
          },
          error: error=>{
            console.error('There was an errorrr!', error);
          }
  })
}
    
  
    
    

  
}
