import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ControlService } from 'src/app/Services/control.service';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  token: any;
  refreshToken: any;
  decoded: any;
  id: any;

  constructor(public ControlService:ControlService, private cookieService:CookieService, private router:Router) { }
  data: any[] = [];
  route: any[] = [];
  ngOnInit(): void {
    this.token = this.cookieService.get('autonumToken');


    if (!this.cookieService.get('autonumToken')) {
      this.router.navigate(['/login']);
    }
    this.refreshToken = new FormGroup({
      refreshToken: new FormControl(this.token)
    })

    // mengecek apakah ada yang login
    this.ControlService.refreshToken(this.refreshToken.value).subscribe((res: any) => {
      this.decoded = jwt_decode(res.accessToken);
      this.ControlService.username = this.decoded.username;
      this.ControlService.email = this.decoded.email;
      this.ControlService.fullname = this.decoded.fullname;
      this.ControlService.userLevel = this.decoded.userLevel;
      this.ControlService.id = this.decoded.id;
      this.id = this.decoded.id;

      this.ControlService.data = {
        username: this.decoded.username,
        email: this.decoded.email,
        fullname: this.decoded.fullname,
        userLevel: this.decoded.userLevel
      }
    });



    this.ControlService.getAllCategories().subscribe((res:any)=>{
      this.data = res;
      this.route = this.data.map((item: any) => item.code.toLowerCase());
    })
  }

}
