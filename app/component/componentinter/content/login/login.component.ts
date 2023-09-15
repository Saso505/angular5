import { Component, EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(){

    console.log("1-consr");
  }
  ngOnInit(): void {
    console.log('2-show');
    this.myEvent.emit(this.count);
  }
  count :number=20;

  @Output ()  myEvent=new EventEmitter();
     // getdata(){
   // this.myEvent.emit(this.count);
  //}
}
