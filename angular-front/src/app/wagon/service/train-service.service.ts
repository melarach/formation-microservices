import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Wagon } from './wagon';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TrainService {
  public observer: BehaviorSubject<string>;
  constructor(private http:HttpClient) {
    console.log("init");
   this.observer=new BehaviorSubject('');
  }

public listWagons()
{
  return this.http.get<Wagon[]>(environment.microservices.api1+'/wagons/');
}
}
