import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

public box = true;

  
  constructor(private http : HttpClient) { }

 

   getoneEmployee(id : any){
    return this.http.get<any>(`http://localhost:8087/health/user/${id}`)
  }
  getEmployee(){
    return this.http.get<any>("http://localhost:8087/health/allUsers")
  }

  postEmployee(userModelObj: any) {
    return this.http.post<any>('http://localhost:8087/health/addUser', userModelObj);
  }

  getProductsByStoreCode(storeCode: string) {
    return this.http.get<any>('http://localhost:3000/products?productCode=' + storeCode);
  }

}
