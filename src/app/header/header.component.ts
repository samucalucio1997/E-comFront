import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../create-user/User';
import { ApiServiceService } from '../login/api-service.service';
import { UserApiService } from './user-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  img:string | ArrayBuffer | null = null;
  peUser!:string;
  response?:any;
  constructor(private service:UserApiService){}
  ngOnInit(){
    if (localStorage.getItem('username')) {
      console.log(localStorage.getItem('username'));
      this.service.chama().subscribe((resp:Blob) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.img = e.target?.result as string | ArrayBuffer | null;
        }
        reader.readAsDataURL(resp);
      });
      this.peUser = localStorage.getItem('username') as string;
      localStorage.removeItem('username');
    }
  }
  logout():void {
    this.peUser = "";
    this.service.logout(); 
  }
}
