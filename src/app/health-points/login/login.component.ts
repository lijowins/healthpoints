import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  //selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.profileService.getAllProfiles().subscribe(
      result => {
        let currentUser: any = result.data.find(x => x.USERNAME == this.loginForm.get('username').value && x.PASSWORD == this.loginForm.get('password').value);
        if(currentUser)
        {  
          this.dataService.currentUser = currentUser;
          this.router.navigate(['/healthpoints/dashboard']);
        }
        else
        {
          this.loading = false;
          this.dataService.currentUser = null;
        }
      },
      error => {
        this.loading = false;
        this.dataService.currentUser = null;
      });
  }
}
