import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  profile: Profile = null;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      AVATAR: ['url_to_image'],
      FIRST_NAME: ['', Validators.required],
      LAST_NAME: ['', Validators.required],
      USERNAME: ['', Validators.required],
      PASSWORD: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid)
      return
    else {
      this.loading = true;
      this.profile = this.registerForm.value;
      this.profileService.registerProfile(this.profile).subscribe(result => {
        this.router.navigate(['/healthpoints/login']);
      },
      error => {
        this.loading = false;
      });
    }
  }
}
