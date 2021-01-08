import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';  
import jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
  
@Component({  
  selector: 'app-policy-preview',  
  templateUrl: './policy-preview.component.html',  
  styleUrls: ['./policy-preview.component.css']  
})  
export class PolicyPreviewComponent{  
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
      pdf.save('Policy.pdf'); // Generated PDF   
    });  
  }  
}  
