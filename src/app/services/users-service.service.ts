import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../interfaces/UserInterface";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  URL: string = 'https://jsonplaceholder.typicode.com'
  constructor(private httpClient: HttpClient) { }

  getUsersTypicodeApi(): Observable<UserInterface[]>{
      return  this.httpClient.get<UserInterface[]>(this.URL+'/comments')
  }

}
