import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SessionService} from '../../service/session.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public error = {
    email : '',
    password : ''
  };
  private returnUrl: string;

  constructor(
    private sess: SessionService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

    this.sess.isLogin = true;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  logout() {
    this.sess.isLogin = false;
    this.router.navigate(['dashboard']);
  }

  onSubmit() {
    this.sess.isLogin = true;
    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        if (username !== 'admin@admin.com') {
          this.form.markAsTouched();
          this.form.get('username').setErrors({server : true});
          this.error.email = 'This email address is not registered on server.';
        } else {
          if (password !== 'admin') {
            this.form.markAsTouched();
            this.form.get('password').setErrors({server : true});
            this.error.password = 'This password is wrong.';
          } else {
            this.sess.isLogin = false;
          }
        }
      } catch (err) {
        // this.loginInvalid = true;
      }
    } else {
      // this.formSubmitAttempt = true;
    }
  }

}
