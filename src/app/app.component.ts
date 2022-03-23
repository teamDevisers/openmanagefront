import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalservicesService } from './globalservices.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openmanage';

  //Loader variable default true before page load
  loader = true;

  constructor(private formBuilder: FormBuilder, private userauth : GlobalservicesService) { }
  //Form Validables 
  registerForm:any =  FormGroup;
  submitted = false;

  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      //alert("Great!!");
      // Initialize Params Object
      var myFormData = new FormData();
      // Begin assigning parameters
      myFormData.append('email', this.registerForm.value.email);
      myFormData.append('password', this.registerForm.value.password);
      this.userauth.userlogin(myFormData); //caaling add user 
    }
  
  }


    //login form
  ngOnInit(): void {
    //login form
   //Add User form validations
   this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    });

     //Loader variable set false after page load
    setTimeout(()=>{                           
      this.loader = false;
  }, 1000);
  }
}
