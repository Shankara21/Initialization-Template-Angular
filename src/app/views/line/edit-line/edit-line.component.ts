import { ControlService } from 'src/app/Services/control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-line',
  templateUrl: './edit-line.component.html',
  styleUrls: ['./edit-line.component.css']
})
export class EditLineComponent implements OnInit {
  constructor(private router: Router, private ControlService: ControlService) { }
  id: any = this.router.url.split('/')[3];

  data: any[] = [];
  section: any[] = [];
  form!: FormGroup;

  code: any;
  name: any;
  ngOnInit(): void {

    this.ControlService.getLineById(this.id).subscribe((res: any) => {

      this.name = res.name;

    })
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    })
  }
  submit() {
    this.ControlService.updateLine(this.id, this.form.value).subscribe((res: any) => {
      this.router.navigate(['/line'])
    })
  }

}
