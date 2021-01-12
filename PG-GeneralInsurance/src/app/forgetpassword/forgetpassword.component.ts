import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPassword } from '../service/forgetPassword.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    result:any;
    message:string="";
    id:any;
    token:any;

    constructor(private formBuilder: FormBuilder,
      private r:Router,
      private forgetPasswordService:ForgetPassword)
    {
      this.registerForm=this.formBuilder.group({});
      localStorage.setItem("returnedID","");
      localStorage.setItem("returnedToken","");
      // this.token=CryptoJS.AES.encrypt("Keerthivasan","Hi,Django,Thisisthekeyforencryptingtoken");
      // console.log(this.token.toString());
      // var dec = CryptoJS.AES.decrypt(this.token.toString(),"Hi,Django,Thisisthekeyforencryptingtoken");
      // console.log(dec.toString(CryptoJS.enc.Utf8));
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userName: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        //Code to send mail
        this.forgetPasswordService.sendMail(this.registerForm.value.userName).subscribe((data)=>{
          this.result=data,
          this.token=this.result.pop(),
          // console.log(this.token),
          this.id=this.result.pop()
          // console.log(this.id),
          this.encryptandstore(),
          alert("Mail Sent To Registered E-Mail")
          // localStorage.setItem("returnedID",this.result[0])
          // localStorage.setItem("returnedToken",this.result[1]);
        },err=>alert(err.error.Message));


    }
    encryptandstore(){        
        //AES-Encryption
        // Encrypting local storage token
        
        // console.log(this.id+"--"+this.token);
        this.token=CryptoJS.AES.encrypt(this.token,"Hi,Django,Thisisthekeyforencryptingtoken");
        // console.log(this.token.toString());

        //Setting Local Storage Data
        localStorage.setItem("returnedID",this.id),
        localStorage.setItem("returnedToken",this.token.toString());
    }
}



















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-forgetpassword',
//   templateUrl: './forgetpassword.component.html',
//   styleUrls: ['./forgetpassword.component.css']
// })
// export class ForgetpasswordComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
