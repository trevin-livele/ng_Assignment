import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFooter } from '../models/footer';
import { IHeader } from '../models/header';


@Injectable({
  providedIn: 'root'
})
export class InfomationService {
  private _baseUrl : string = "/assets/footer.json";
  private _baseUrl2 : string = "/assets/header.json";


  constructor(private http : HttpClient) { }


  getData():Observable<IFooter[]>{
    return this.http.get<IFooter[]>(this._baseUrl);
  }
  getHeaderData():Observable<IHeader[]>{
    return this.http.get<IHeader[]>(this._baseUrl2);
  }
}
