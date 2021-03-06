import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {


    
    constructor(private httpClient:HttpClient) { }
  
    getCar():Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +'cars/getalldetails';
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarByBrand(brandId:Number):Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +`cars/getalldetailsbybrand?brandid=${brandId}`;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarByColor(colorId:Number):Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +`cars/getalldetailsbycolor?colorid=${colorId}`;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}`;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
}
