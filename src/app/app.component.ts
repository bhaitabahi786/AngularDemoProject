import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { NameService } from './name.service';
import { Routes, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  response = "";

  constructor( ){

  }

  }

  // constructor(private nameService:NameService){

  // }
  // onSend(fname:string){
  //   const formData : FormData = new FormData()
  //   formData.append('name',fname)
  //   this.nameService.onSendService(formData).subscribe
  //   (res=>{
  //       console.log(res);
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   )

  // firstName:string | undefined;
  // lastName:string | undefined;
  // email:string | undefined;
  
  // onSubmit(){
  //   const fn = this.firstName;
  //   const ln = this.lastName;
  //   const em = this.email;

    // console.log(fn)
  

