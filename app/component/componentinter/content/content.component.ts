import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
@Input() dataFromParent: string= "Test Data";
@Input() countFromLogin:number=0;
}
