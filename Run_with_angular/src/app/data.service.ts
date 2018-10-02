import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private URL_DATA = 'https://api.myjson.com/bins/uptto';
  private dataSource = new BehaviorSubject<any>({companies:[]});
  public currentData = this.dataSource.asObservable();
  private agents: any = {};

  constructor(private http: HttpClient) { }

  getAgents(){
    const data_URL = this.http.get(this.URL_DATA);
    this.changeData(data_URL);
    data_URL.subscribe(data => this.agents = data);
    return data_URL;
  }

  changeData(data: any) {
    this.dataSource.next(data);
  }
  
  public filter(userInput) {
    userInput = userInput.toUpperCase();
    const filteredData = this.agents.companies.filter((agent => agent.name.toUpperCase().includes(userInput)));
    this.changeData(filteredData);
  }

}
