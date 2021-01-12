import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from '../model/resetPassword';
import { ForgetPassword } from '../service/forgetPassword.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

    resetForm: FormGroup;
    submitted = false;
    urlData:any;
    data:ResetPassword=new ResetPassword();
    localStorageToken:any="";

    constructor(private formBuilder: FormBuilder,
      private router: ActivatedRoute,
      private r:Router,
      private FP:ForgetPassword) 
    { 
      this.resetForm=this.formBuilder.group({});
        // var decryptedLocalStorageToken=CryptoJS.AES.decrypt("U2FsdGVkX19H7VuML8dP8bjbhopfQpTPWVUvyn7qJ/4=","Hi,Django,Thisisthekeyforencryptingtoken");
        // console.log(decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8));
    }

    ngOnInit() {

        this.resetForm = this.formBuilder.group({
            newPass: ['', Validators.required],
            confirmPass: ['', Validators.required],
        });

        this.router.queryParams.subscribe(params => {
          // console.log(params);
          this.urlData=params;
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.resetForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.resetForm.invalid || this.resetForm.value.newPass != this.resetForm.value.confirmPass) {
          alert("Invalid Entry");  
          return;
        }

        // if(localStorage.getItem("returedID") === null || localStorage.getItem("returedToken") === null){
        //   alert("Access Denied ");
        //   // console.log(localStorage.getItem("returnedID"));
        //   return;
        // }
        //AES-Decryption
        //Decrypting local storage token
        this.localStorageToken = localStorage.getItem("returnedToken")?.toString();
        var decryptedLocalStorageToken=CryptoJS.AES.decrypt(this.localStorageToken,"Hi,Django,Thisisthekeyforencryptingtoken");
        console.log(this.localStorageToken+"---"+decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8));
        console.log(this.urlData.id);
        console.log(this.urlData.token);
        console.log(this.urlData.id==localStorage.getItem("returnedID"));
        console.log(this.urlData.token==decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8));

        //Validating the token
        if(this.urlData.id==localStorage.getItem("returnedID") && this.urlData.token==decryptedLocalStorageToken.toString(CryptoJS.enc.Utf8)){
          
          this.data.id=this.urlData.id;
          this.data.newPassword=this.resetForm.value.newPass;
          this.FP.savePass(this.data).subscribe(data=>{alert("password changed")},
            err=>{alert(err.err.message+"errors")});

          // code : navigate to student login 
          //...
        }
        else{
          alert("Access Denied");
          localStorage.clear();
        }

    }

}














// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-reset',
//   templateUrl: './reset.component.html',
//   styleUrls: ['./reset.component.css']
// })
// export class ResetComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
