import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Motorclaim } from '../model/motorclaim';

import { Travelclaim } from '../model/travelclaim';



@Injectable({

  providedIn: 'root'

})

export class ClaimService {



  constructor(private httpClient:HttpClient) { }



  public addMotorClaim(

    Policy_Id: any,

        Name: any,

        Mobile_Number: any,

        Reason: any,

        Date_Of_Applying: any,

        Estimated_Amount_For_Repair: any,

        licenceFile:File,

        rcFile:File,

        insuranceFile:File,

        billFile:File,

  )

  {

    const formData=new FormData();

    formData.append("Policy_Id",Policy_Id);

    formData.append("Name",Name);

    formData.append("Mobile_Number",Mobile_Number);

    formData.append("Reason",Reason);

    formData.append("Date_Of_Applying",Date_Of_Applying);

    formData.append("Estimated_Amount_For_Repair",Estimated_Amount_For_Repair);

    formData.append("License_Copy",licenceFile,licenceFile.name);

    formData.append("RC_Copy",rcFile,rcFile.name);

    formData.append("Insurance_Copy",insuranceFile,insuranceFile.name);

    formData.append("Bill_Copy",billFile,billFile.name)

    return this.httpClient.post("http://localhost:53421/api/Claim/Accident",formData);

  }

  public addMotorClaimTheft(

    Policy_Id: any,

        Name: any,

        Mobile_Number: any,

        Reason: any,

        Date_Of_Applying: any,

        licenceFile:File,

        rcFile:File,

        insuranceFile:File,

        rtoFile:File,

  )

  {

    const formData=new FormData();

    formData.append("Policy_Id",Policy_Id);

    formData.append("Name",Name);

    formData.append("Mobile_Number",Mobile_Number);

    formData.append("Reason",Reason);

    formData.append("Date_Of_Applying",Date_Of_Applying);

    formData.append("License_Copy",licenceFile,licenceFile.name);

    formData.append("RC_Copy",rcFile,rcFile.name);

    formData.append("Insurance_Copy",insuranceFile,insuranceFile.name);

    formData.append("Authenticated_Letter_from_RTO",rtoFile,rtoFile.name)

    return this.httpClient.post("http://localhost:53421/api/Claim/Theft",formData);

  }



  public addTravelClaim(Travel_Policy_Id: any,

    fileToUpload:File,

    Reason_for_Claim: any,

    Mobile_Number: any,

    fileToUpload2:File)

  {

    const formData=new FormData();



    formData.append('Travel_Policy_Id',Travel_Policy_Id);

    formData.append('Ticket_Copy',fileToUpload,fileToUpload.name);

    formData.append('Reason_for_Claim',Reason_for_Claim);

    formData.append('Mobile_Number',Mobile_Number);

    formData.append('Complaint_Copy',fileToUpload2,fileToUpload2.name);

    return this.httpClient.post("http://localhost:53421/api/TravelClaim/TheftofBaggage",formData);

    

  }

  public addTravelClaimAccident(Travel_Policy_Id: any,

    fileToUpload:File,

    Reason_for_Claim: any,

    Mobile_Number: any,

    )

  {

    const formData=new FormData();



    formData.append('Travel_Policy_Id',Travel_Policy_Id);

    formData.append('Ticket_Copy',fileToUpload,fileToUpload.name);

    formData.append('Reason_for_Claim',Reason_for_Claim);

    formData.append('Mobile_Number',Mobile_Number);

   

    return this.httpClient.post("http://localhost:53421/api/TravelClaim/Accident",formData);

    

  }

 

}