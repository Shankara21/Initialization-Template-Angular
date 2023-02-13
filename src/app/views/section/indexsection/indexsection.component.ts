import { ControlService } from './../../../Services/control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexsection',
  templateUrl: './indexsection.component.html',
  styleUrls: ['./indexsection.component.css']
})
export class IndexsectionComponent implements OnInit {
  constructor(private router: Router, private ControlService: ControlService) { }

  itemsPerPage: number = 10;
  p: number = 1;

  data: any[] = [];
  term: any;
  ngOnInit(): void {
    this.ControlService.getSection().subscribe((res: any) => {
      this.data = res;
    })
  }
  delete(id: any) {
    this.ControlService.deleteSection(id).subscribe((res: any) => {
      this.router.navigate(['/sections']);
      window.location.reload();
    });
  }
}
