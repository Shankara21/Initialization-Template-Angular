import { Component, OnInit } from '@angular/core';
import { ControlService } from './../../../Services/control.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index-line',
  templateUrl: './index-line.component.html',
  styleUrls: ['./index-line.component.css']
})
export class IndexLineComponent implements OnInit {
  constructor(private router: Router, private ControlService: ControlService) { }
  itemsPerPage: number = 10;
  p: number = 1;

  data: any[] = [];
  term: any;
  ngOnInit(): void {
    this.ControlService.getLine().subscribe((res: any) => {
      this.data = res;
    })
  }
  delete(id: any) {
    this.ControlService.deleteLine(id).subscribe((res: any) => {
      this.router.navigate(['/line']);
      window.location.reload();
    });
  }
}
