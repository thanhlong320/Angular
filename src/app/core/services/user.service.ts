import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/sample/user.model';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = "http://localhost:8080/DataAdapterSystem/users"

  getUser(): Observable<User>{
    return this.httpClient.get<User>(this.apiURL)
  }

  constructor(private httpClient: HttpClient) { }
}
