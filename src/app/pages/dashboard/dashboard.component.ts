import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ControlService } from './../../Services/control.service';
import jwt_decode from 'jwt-decode';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private elementRef: ElementRef, private ControlService: ControlService, private cookieService: CookieService, private router: Router) { }

  dq: any;
  iq: any;
  pq: any;
  pv: any;
  oq: any;
  rv: any;
  fat: any;
  ms: any;
  ps: any;
  qs: any;
  st: any;
  sop: any;
  fr: any;

  // auth
  decoded: any;
  refreshToken: any;
  id: any
  ngOnInit(): void {
    const token = this.cookieService.get('autonumToken');

    if (!this.cookieService.get('autonumToken')) {
      this.router.navigate(['/login']);
    }

    // this.refreshToken = new FormGroup({
    //   refreshToken: new FormControl(token)
    // })

    // mengecek apakah ada yang login
    // this.ControlService.refreshToken(this.refreshToken.value).subscribe((res: any) => {
    //   this.decoded = jwt_decode(res.accessToken);
    //   this.ControlService.username = this.decoded.username;
    //   this.ControlService.email = this.decoded.email;
    //   this.ControlService.fullname = this.decoded.fullname;
    //   this.ControlService.userLevel = this.decoded.userLevel;
    //   this.ControlService.id = this.decoded.id;
    //   this.id = this.decoded.id;


    //   this.ControlService.data = {
    //     username: this.decoded.username,
    //     email: this.decoded.email,
    //     fullname: this.decoded.fullname,
    //     userLevel: this.decoded.userLevel
    //   }

    // });

    this.ControlService.getAmountDocument().subscribe((res: any) => {
      this.dq = res.dq[0].amount;

      this.iq = res.iq[0].amount;
      this.pq = res.pq[0].amount;
      this.pv = res.pv[0].amount;
      this.oq = res.oq[0].amount;
      this.rv = res.rv[0].amount;
      this.fat = res.fat[0].amount;
      this.ms = res.ms[0].amount;
      this.ps = res.ps[0].amount;
      this.qs = res.qs[0].amount;
      this.st = res.st[0].amount;
      this.sop = res.sop[0].amount;
      this.fr = res.fr[0].amount;

    })
  }

}
