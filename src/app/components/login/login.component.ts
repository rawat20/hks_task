import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  MAIL_ID: string = '';
  PASSWORD: string = '';
  hide: boolean = true;
  constructor(private route: Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.MAIL_ID === 'info@optium.com' && this.PASSWORD === 'Optium@112233') {
      localStorage.setItem('user', this.MAIL_ID);
      this.route.navigate(['/home'])
    }
    else {
      alert('Invalide login credentials !')
      return;
    }
  }

  showPassword() {
    this.hide = !this.hide;
  }
}
