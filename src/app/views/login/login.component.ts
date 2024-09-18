import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  remember = false;

  toggle_remember(){
    this.remember = !this.remember;
  }

  go_to_dashboard(){
    this.router.navigate(["/dashboard"])
  }

}
