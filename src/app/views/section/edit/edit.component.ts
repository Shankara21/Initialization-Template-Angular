import { ControlService } from 'src/app/Services/control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private ControlService: ControlService) { }
  id: any = this.router.url.split('/')[3];

  data: any[] = [];
  section: any[] = [];
  form!: FormGroup;

  name: any;
  code: any = '';
  ngOnInit(): void {


    this.ControlService.getSectionById(this.id).subscribe((res: any) => {
      this.name = res.name;
      this.code = res.code;
    })
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
    })
  }
  submit() {

    this.ControlService.updateSection(this.id, this.form.value).subscribe((res: any) => {
      this.router.navigate(['/sections']);
    })
  }

}
