import { ControlService } from './../../Services/control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private router: Router, private ControlService: ControlService) { }
  name: string = this.router.url.substring(1);
  data: any[] = [];
  section: any[] = [];
  form!: FormGroup;
  ngOnInit(): void {
    this.ControlService.getAllCategories().subscribe((res: any) => {
      this.data = res;
    });
    this.ControlService.getSection().subscribe((res: any) => {
      this.section = res;
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
    this.form.value.categoryId = Number(this.form.value.categoryId);
    this.form.value.sectionId = Number(this.form.value.sectionId);

    this.ControlService.createDocument(this.form.value).subscribe((res: any) => {
      this.router.navigate([`/${this.params}`]);
    })
  }

}
