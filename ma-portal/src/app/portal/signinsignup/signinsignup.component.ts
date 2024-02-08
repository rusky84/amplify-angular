import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_share/services/auth/auth.service';

@Component({
  selector: 'app-signinsignup',
  templateUrl: './signinsignup.component.html',
  styleUrls: ['./signinsignup.component.css']
})
export class SigninsignupComponent implements OnInit {
  @Output() OnSignInSignUpSubmit = new EventEmitter<any>();
  loginForm?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService : AuthService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

       // Call the authentication service's login method
       if (this.authService.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login

        alert(username);alert(password);
        this.OnSignInSignUpSubmit.emit();
        this.router.navigate(['/portal/wa']);
      } else {
        // Handle authentication error (show error message, etc.)
      }

    }
  }

}
