import { ControlService } from './../../Services/control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor(private router: Router, private ControlService: ControlService) { }
  term: any;
  name: string = this.router.url.substring(10);
  title: any;
  temp: any[] = [];
  data: any[] = [];

  // pagination
  p: number = 1;
  itemsPerPage: number = 15;
  totalProduct: any;

  // array of year
  years: any[] = [];
  startYear: any;

  filterYear!: FormGroup;
  categoryId: number = 0;

  document:any;
  ngOnInit(): void {
    // Categories
    this.ControlService.getCategories(this.name).subscribe((res: any) => {
      this.temp = res;
      this.title = this.temp[0].name;
      this.categoryId = this.temp[0].id;
      this.filterYear = new FormGroup({
        year: new FormControl('', [Validators.required]),
        categoryId: new FormControl(this.categoryId, [Validators.required]),
      })
    });
    this.ControlService.getListDocuments(this.name).subscribe((res: any) => {
      this.data = res;
      this.totalProduct = this.data.length;
    });

    this.startYear = new Date().getFullYear() - 3;
    for (let i = this.startYear; i <= new Date().getFullYear() + 5; i++) {
      this.years.push(i);
    }


  }
  reload() {
    window.location.reload();
  }
  delete(id: any) {
    this.ControlService.deleteDocument(id).subscribe((res: any) => {
      this.router.navigate([this.name]);
      window.location.reload();
    });
  }
  filter() {
    console.log(this.filterYear.value);

    this.ControlService.filterByYear(this.filterYear.value).subscribe((res: any) => {
      this.data = res;
      console.log(res);

    });
  }
}
