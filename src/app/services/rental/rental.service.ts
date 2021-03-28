import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental/rental';
import { ResponseModel } from 'src/app/models/responseModel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  
  
  constructor(private httpClient:HttpClient) { }

  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl+"rentals/add",rental)
  }
}
