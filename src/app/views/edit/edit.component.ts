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
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ControlService.getAllCategories().subscribe((res: any) => {
      this.data = res;
    });
    this.ControlService.getSection().subscribe((res: any) => {
      this.section = res;
    });
    this.ControlService.findDocument(this.id).subscribe((res: any) => {
      this.form = new FormGroup({
        project: new FormControl(res.project, [Validators.required]),
        sectionId: new FormControl(res.sectionId, [Validators.required]),
        categoryId: new FormControl(res.categoryId, [Validators.required]),
        line: new FormControl(res.line, [Validators.required]),
        pic: new FormControl(res.pic, [Validators.required]),
        status: new FormControl(res.status, [Validators.required]),
      })
    });
  }
  params: any;
  submit() {
    this.ControlService.getCategoriesById(this.form.value.categoryId).subscribe((res: any) => {
      this.params = res[0].code;
      // convert this params to lowercase
      this.params = this.params.toLowerCase();
    })
    // this.form.value.categoryId = Number(this.form.value.categoryId);
    console.log(this.form.value);

    // this.ControlService.createDocument(this.form.value).subscribe((res: any) => {
    //   this.router.navigate([`/${this.params}`]);
    // })
    // this.ControlService.updateDocument(this.id,this.form.value).subscribe((res: any) => {
    //   this.router.navigate([`/${this.params}`]);
    // })
  }
}
