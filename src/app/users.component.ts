import { Component,Input} from '@angular/core';

@Component({
  selector: 'myapp',
  templateUrl: './users.component.html',
  styles:['li {color:coral}'],
  styleUrls:['./users.component.css']
})
export class userComponent {
   @Input() title;
  
}
