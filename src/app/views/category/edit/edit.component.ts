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

  code: any;
  name: any;
  ngOnInit(): void {
    
    this.ControlService.getCategoriesById(this.id).subscribe((res: any) => { 
      
      this.code = res[0].code;
      this.name = res[0].name;
      
    })
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    })
  }
  submit() { 
    this.ControlService.updateCategories(this.id, this.form.value).subscribe((res: any) => { 
      this.router.navigate(['/categories'])
    })
  }

}
