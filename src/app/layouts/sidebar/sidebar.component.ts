import { ControlService } from 'src/app/Services/control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private ControlService:ControlService) { }
  data: any[] = [];
  route: any[] = [];
  ngOnInit(): void {
    this.ControlService.getAllCategories().subscribe((res:any)=>{
      this.data = res;
      this.route = this.data.map((item: any) => item.code.toLowerCase());
    })
  }

}
