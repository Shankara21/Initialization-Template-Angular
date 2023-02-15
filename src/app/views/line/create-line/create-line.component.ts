import { ControlService } from 'src/app/Services/control.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-line',
  templateUrl: './create-line.component.html',
  styleUrls: ['./create-line.component.css']
})
export class CreateLineComponent implements OnInit {
  constructor(private router: Router, private ControlService: ControlService) { }
  data: any[] = [];
  form!: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    })
  }
  submit() {
    this.ControlService.createLine(this.form.value).subscribe((res: any) => {
      this.router.navigate(['/line'])
    })
  }

}
