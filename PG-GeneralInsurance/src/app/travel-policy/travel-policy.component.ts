import { Component, OnInit, ElementRef ,ViewChild, Inject} from '@angular/core';  
import jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MotorPolicyService } from '../service/motorPolicy.service';

@Component({
  selector: 'app-travel-policy',
  templateUrl: './travel-policy.component.html',
  styleUrls: ['./travel-policy.component.css']
})
export class TravelPolicyComponent  {

  policy:any;
  premium:number=NaN;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private motorPolicy:MotorPolicyService){
    this.motorPolicy.getTravelPolicy(data).subscribe((d:any)=>{this.policy=d});
    this.motorPolicy.getTransaction(data).subscribe((p:any)=>{ this.premium=p;})! ;
  }

  public PrintPolicy()  
  {  
    var data = document.getElementById('contentToConvert')!;  
    html2canvas(data).then((canvas:any) => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save(this.data+'_TravelPolicy.pdf'); // Generated PDF   
    });  
  }  

}
