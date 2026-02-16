import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private baseUrl = 'http://localhost:8080/users';

  constructor(private httpClient:HttpClient) { }

  getAllUsers()
  {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  getUserById(id:number)
  {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  addUser(user:User)
  {
    return this.httpClient.post<User>(this.baseUrl,user);
  }

  updateUser(id:number,user:User)
  {
    return this.httpClient.patch<User>(`${this.baseUrl}/${id}`,user);
  }

  deleteUser(id:number)
  {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }

    changeRole(id:number,role:string)
    {
      return this.httpClient.patch<User>(`${this.baseUrl}/${id}/role=${role}`,{});
    }

    

}
