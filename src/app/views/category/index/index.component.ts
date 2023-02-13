import { ControlService } from './../../../Services/control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private ControlService: ControlService) { }

  itemsPerPage: number = 10;
  p: number = 1;

  data:any[] = [];
  term: any;
  ngOnInit(): void {
    this.ControlService.getAllCategories().subscribe((res: any) => {
      this.data = res;
    })
  }

}
