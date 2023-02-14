import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-in-library',
  templateUrl: './in-library.component.html',
  styleUrls: ['./in-library.component.css']
})
export class InLibraryComponent implements OnInit {

  constructor(public bookService:BooksService,private toast:NgToastService) { }
  /* istanbul ignore next */
  onclick=()=>{
    this.toast.success({detail:"Success Massege",summary:"You have reserve the book",duration:5000})
  }

  ngOnInit(): void {
  }

}
