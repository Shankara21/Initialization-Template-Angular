import { ControlService } from './../../Services/control.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private ControlService: ControlService, private route: ActivatedRoute,
  ) { }
  id!: number;
  name: string = this.router.url.substring(1);
  data: any[] = [];
  section: any[] = [];
  form!: FormGroup;

  // document
  document: any;
  project: any;
  sectionId: any;
  categoryId: any;
  lineId: any;
  pic: any;
  status: any;

  // Line
  lineData: any[] = [];

  // filterByYear


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ControlService.getAllCategories().subscribe((res: any) => {
      this.data = res;
    });
    this.ControlService.getSection().subscribe((res: any) => {
      this.section = res;
    });
    this.ControlService.getLine().subscribe((res: any) => {
      this.lineData = res;
    })
    this.ControlService.findDocument(this.id).subscribe((res: any) => {

      this.project = res.project;
      this.sectionId = res.sectionId;
      this.categoryId = res.categoryId;
      this.lineId = res.Line.id;
      this.pic = res.pic;
      this.status = res.status;
    });
    this.form = new FormGroup({
      project: new FormControl('', [Validators.required]),
      sectionId: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
      line: new FormControl('', [Validators.required]),
      pic: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    })
  }
  params: any;
  submit() {
    this.ControlService.getCategoriesById(this.form.value.categoryId).subscribe((res: any) => {
      this.params = res[0].code;
      // convert this params to lowercase
      this.params = this.params.toLowerCase();
    })
    // this.form.value.categoryId = Number(this.form.value.categoryId);

    // this.ControlService.createDocument(this.form.value).subscribe((res: any) => {
    //   this.router.navigate([`/${this.params}`]);
    // })
    this.form.value.categoryId = Number(this.form.value.categoryId);
    this.form.value.sectionId = Number(this.form.value.sectionId);
    this.form.value.lineId = Number(this.form.value.line);

    this.ControlService.updateDocument(this.id, this.form.value).subscribe((res: any) => {
      this.router.navigate([`/${this.params}`]);
    })
  }

}
