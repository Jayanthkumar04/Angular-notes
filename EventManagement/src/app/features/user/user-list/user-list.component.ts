import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../services/user.service';
import { CommonModule, NgForOf } from "@angular/common";
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users:User[] = [] ;

  constructor(private userService:UserService){}

  ngOnInit(){
      
    this.loadUsers();
  } 

  loadUsers()
  {
    this.userService.getAllUsers().subscribe(data=>this.users=data);
  }



}
