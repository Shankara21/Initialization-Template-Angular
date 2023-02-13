import { Component, OnInit, ElementRef } from '@angular/core';
import { ControlService } from './../../Services/control.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private elementRef: ElementRef, private ControlService: ControlService) { }

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

  ngOnInit(): void {
    this.ControlService.getAmountDocument().subscribe((res: any) => {
      console.log(res.dq[0].amount)
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
