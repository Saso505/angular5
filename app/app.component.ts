import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myText : string="Welcome in My Web";
  countData : any= 0;
  getdata(x :any){
    this.countData = x;
    console.log("succes");
  }
}
