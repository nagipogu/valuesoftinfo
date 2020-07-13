import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetListService } from '../services/get-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search: any;
  userData: any;
  userId: any;
  userDetails: any;
  constructor(private form: FormBuilder, private getListService: GetListService) { }

  ngOnInit(): void {
    this.usersList();
  }
  opensweetalert() {
    Swal.fire({
      text: 'Hello!',
      icon: 'success'
    });
  }


  opensweetalertdng() {
    Swal.fire('Oops...', 'Something went wrong!', 'error')
  }
  opensweetalertcst() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  /////@@@@ Search ///////
  searchName() {
    console.log(this.search)
    
  }


  /////@@Api Call/////////
  usersList() {
    var Obj = ""
    this.getListService.getUser(Obj).subscribe(rdata => {
      console.log(rdata)
      this.userData = rdata;
    })
  }

  getUser(obj){
     console.log(obj.id)
      const userId = obj.id
     this.getListService.getUserDetails(userId).subscribe(rdata => {
      console.log(rdata)
      this.userDetails = rdata;
      console.log(this.userDetails);
    })
  }

}
