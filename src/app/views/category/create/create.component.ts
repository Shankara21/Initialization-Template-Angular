import { ControlService } from 'src/app/Services/control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private ControlService: ControlService) { }
  data: any[] = [];
  section: any[] = [];
  form!: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    })
  }
  submit() {
    this.ControlService.createCategories(this.form.value).subscribe((res: any) => { 
      this.router.navigate(['/categories'])
    })
  }

}
