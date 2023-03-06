import { ControlService } from './../../../Services/control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router, private ControlService: ControlService) { }

  itemsPerPage: number = 10;
  p: number = 1;

  data:any[] = [];
  term: any;
  ngOnInit(): void {
    this.ControlService.getAllCategories().subscribe((res: any) => {
      this.data = res;
      // menambah index pada data
      this.data.map((item: any) => {
        item.index = this.data.indexOf(item) + 1;
      })
      console.log(this.data);

    })
  }
  delete(id: any) {
    this.ControlService.deleteCategories(id).subscribe((res: any) => {
      this.router.navigate(['/categories']);
      window.location.reload();
    });
  }

}
