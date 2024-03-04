import { NgFor, NgIf } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registerform',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.css'
})
export class RegisterformComponent implements OnInit {
  
  constructor(private router:Router){}


  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(val=>console.log(val));
  }

 

  


  submit(e:any){
    e.preventDefault();
    fetch("http://localhost:8000/api/user/register",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(this.registerForm.value)
    })
    .then(res=>res.json())
    .then(valasz=>{
      if(!valasz.message){
        sessionStorage.setItem('usertoken',valasz);
        alert(valasz);
        this.router.navigate(['/']);
      } else {
        alert(valasz.message);
      }
      
    })
    .catch(err=>console.log(err));

  }

  getError(path:string,errorName:string){
    const formControl=(this.registerForm.get(path) as FormControl);
      if(formControl.untouched && formControl.pristine){
        return;
      }
      return formControl.errors?.[errorName];

  }

  registerForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    age:new FormControl('',[Validators.required,Validators.min(10),Validators.max(99)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    passwordagain:new FormControl('',[Validators.required,Validators.minLength(8)])

  });

}
