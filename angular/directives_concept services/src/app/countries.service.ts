import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  //HttpClient httpClient = new HttpClient();
  constructor(public httpClient:HttpClient)
   {}

    public getCountriesData():Observable<any>
    {
      return this.httpClient.get("https://restcountries.com/v3.1/all");
    }

    
}
