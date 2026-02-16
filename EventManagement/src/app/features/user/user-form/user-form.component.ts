import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../../../core/models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit{

  userForm !: FormGroup;
  userId? :number;
  isEditMode = false;

  roles = ['ROLE_ADMIN','ROLE_USER'];

  constructor(private fb:FormBuilder,private userService:UserService,private route:ActivatedRoute,private router:Router){
    
  }

  ngOnInit(): void {
      this.createForm();
      this.checkEditMode();
  }

  createForm()
  {
    this.userForm = this.fb.group({

      name:['',Validators.required],
      emailId:['',[Validators.required,Validators.email]],
      contactNumber:['',[Validators.required,Validators.minLength(10)]],
      role:['ROLE_USER']
    });

  }

  checkEditMode()
  {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
      this.isEditMode = true;
      this.userId =+id;
      this.loadUser(this.userId);
    }
  }

  loadUser(id:number)
  {
    this.userService.getUserById(id).subscribe(user => {
      this.userForm.patchValue(user);
    });
  }

  submit()
  {
    if(this.userForm.invalid) return;

    const user:User = this.userForm.value;

    if(this.isEditMode && this.userId){
      this.userService.updateUser(this.userId,user).subscribe(()=>{
        this.router.navigate(['/users']);
      });
    }else{
      this.userService.addUser(user).subscribe(()=>{
        this.router.navigate(['/users']);
      })
    }
  }






}
