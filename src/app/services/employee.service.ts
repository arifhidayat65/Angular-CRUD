import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from    '../models/employee';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  host = environment.host.concat("/employee");
  header = new HttpHeaders({
    'Acces-Control-Allow-Origin' : '*',
    'Acces-Control-Allow-Methods' : 'GET,POST,PUT,DELETE,OPTIONS',
  });

  constructor(private httpClient: HttpClient) { }

   public getAll(){
     return this.httpClient.get<Array<Employee>>(`${this.host}`);
    }

    public getDetail(id: string){
      return this.httpClient.get<Employee>(`${this.host}/${id}`);
    }

    public post(data){
      return this.httpClient.post(`${this.host}`, data);
    } 

    public put(id: any, data: any){
      return this.httpClient.post(`${this.host}`, data, {headers: this.header});
    } 

    public delete(id: any){
      return this.httpClient.delete(`${this.host}/${id}`,{headers:this.header} );
    } 


}
