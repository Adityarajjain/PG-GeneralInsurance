import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../model/register';
import { FormGroup,Validators,FormBuilder } from "@angular/forms";
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  register:Register;
 
  
  constructor(private registerService:RegisterService,private route:Router,private fb:FormBuilder) {
    this.register=new Register();
    this.registerForm = fb.group({
      Mobile_Number:['', [Validators.required,Validators.minLength(10),Validators.pattern("[0-9]*")]],
      Password:['',[Validators.required,Validators.minLength(8)]],
      Name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      Email_Id:['',[Validators.required,Validators.email]],
      Gender:['',[Validators.required]],
      Door_Number:['',[Validators.required,Validators.pattern('[0-9]*')]],
      Street:['',[Validators.required]],
      City:['',[Validators.required]],
      District:['',[Validators.required]],
      State:['',[Validators.required]],
      Pincode:['',[Validators.required,Validators.pattern('[0-9]*')]],
   });
   
  }
 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add '' to the class.
    
  }
  get f(){
    return this.registerForm.controls;
  }

 
  InsertUser()
  {
   
    this.registerService.addUsers(this.registerForm.value).subscribe(data=>console.log(data))
    alert("User registered");
    console.log(this.registerForm.value);
    this.route.navigateByUrl('/login')
  }
 
}













// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Register } from '../model/register';

// import { RegisterService } from '../service/register.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   register:Register
//   constructor(private registerService:RegisterService,private route:Router) {
//     this.register=new Register();
//    }
  
//   InsertUser()
//    {
//     if (this.register.Mobile_Number == ''  ) {
//       alert('Mobile Number is Mandatory')
//       return
//      }
//     if (this.register.Password ==  '') {
//       alert('Enter password')
//       return
//     }
//     if (this.register.Name ==  '') {
//       alert('Enter name')
//       return
//     }
//     if (this.register.Email_Id==  '') {
//       alert('Enter email Id')
//       return
//     }
//     if (this.register.Gender ==  '') {
//       alert('Enter gender')
//       return
//     }
//     if (this.register.Door_Number ==  '') {
//       alert('Enter Door Number')
//       return
//     }
//     if (this.register.Street == '') {
//       alert('Enter Street')
//       return
//     }
//     if (this.register.District== '') {
//       alert('Upload District')
//       return
//     }
//     if (this.register.State== '') {
//       alert('Upload State')
//       return
//     }
//     if (this.register.Pincode== '') {
//       alert('Upload Pincode')
//       return
//     }
//     console.log(this.register);
//      this.registerService.addUsers(this.register).subscribe(data=>console.log(data))
//      alert("User registered");
//      this.route.navigateByUrl('/login')
//    }

//   ngOnInit(): void {
//   }

// }
