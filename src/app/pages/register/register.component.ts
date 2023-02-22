import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/Services/control.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ControlService: ControlService, private router: Router, private cookieService:CookieService) { }
  errorMsg: any;
  form!: FormGroup
  ngOnInit(): void {
    const token = this.cookieService.get('autonumToken');
    if (this.cookieService.get('autonumToken')) {
      this.router.navigate(['/dashboard']);
    }

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    // this.ControlService.register(this.form.value).subscribe((res: any) => {
    //   this.route.navigate(['/login']);
    // }, (err: any) => {
    //   this.errorMsg = err.error.message;
    // });
  }

}
