import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import axios from 'axios'
 

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(public regForm:FormBuilder) { }
  public submitted:boolean=false
  public notMatch: boolean = false
  public myForm:any  
  ngOnInit(): void {
    this.myForm= this.regForm.group({
      Name:['',Validators.required],
      Email:['',[Validators.required, Validators.email]],
      Password:['',[Validators.required,Validators.minLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$")]],
      RePassword:['',Validators.required],
      Agreed:[false, Validators.requiredTrue]
    })
  }
  get form(){ return this.myForm.controls; }
  
   get check(){
    let formValues= this.myForm.value
    if (formValues.Password != formValues.RePassword){
     this.notMatch =true
    }
    else {
      this.notMatch =false
    }
     return this.notMatch
    
  }

  submitForm(){
    this.submitted=true
    let formValues= this.myForm.value
     if (this.myForm.invalid) return
     if (formValues.Password != formValues.RePassword) return
     console.log('hi')
     axios.post('http://localhost:2022/registeruser',formValues).then( res=>{
      if (res.data){
          alert('successful')
      }
      else{
        alert('email already reistered')
      }
     })
    }
    
    



     
  }


