import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  rentalAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createRentAddForm();
  }
  createRentAddForm(){
    this.rentalAddForm=this.formBuilder.group({
    carId:["",Validators.required],
    customerId:["",Validators.required],
    rentDate:["",Validators.required],

    })
  }
  add(){
    if(this.rentalAddForm.valid){
       let rentalModel=Object.assign({},this.rentalAddForm.value)
    this.rentalService.add(rentalModel).subscribe(response=>{
      console.log(response)
      this.toastrService.success(response.message,"Başarılı bir şekilde kiralandı")
    },responseError=>{
      console.log(responseError.error)
    })
    }else {
      this.toastrService.error("Form Eksik")
    }
   
  }

}
