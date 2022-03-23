import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GlobalservicesService {
  
  constructor(private http:HttpClient) { }
  //add new user    
  public userlogin(userData:any)
  {
    return this.http.post('APIURL'
  , userData).subscribe((res: any) => {
    console.log(res)
  });
  }
}
