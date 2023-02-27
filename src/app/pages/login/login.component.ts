import { ControlService } from 'src/app/Services/control.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ControlService: ControlService, private cookieService: CookieService) { }
  form!: FormGroup
  errorMsg: any;
  ngOnInit(): void {
    const token = this.cookieService.get('autonumToken');
    if (this.cookieService.get('autonumToken')) {
      this.router.navigate(['/dashboard']);
    }
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  submit() {
    this.ControlService.login(this.form.value).subscribe((res: any) => {
      // expired dalam 12 jam
      this.cookieService.set('autonumToken', res.token, { expires: 0.5, sameSite: 'Lax' });
      this.router.navigate(['/dashboard']);
    }, (err: any) => {
      this.errorMsg = err.error.message;
    });
  }

}
