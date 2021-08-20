import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayCat = false;
  shouldRun= true;
  shouldHide=false;
  constructor() { }

  ngOnInit(): void {
  }
 onShow(){
   this.displayCat=true;
   
 }
}
