import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiurl = 'http://localhost:3000/users'; 
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.apiurl + '/' + id);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiurl, user);
  }

  updateUser(id:number,user: User): Observable<User> {
    return this.http.put<User>(this.apiurl + '/' + user.id, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.apiurl + '/' + id);
  }

}



  
