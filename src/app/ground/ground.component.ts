import { Component} from '@angular/core';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.css']
})
export class GroundComponent {
  artists = [
    { productName: 'blue', highlight: true},
    { productName: 'red', highlight: true},
    { productName: 'green', highlight: true},
    { productName: 'black', highlight: true}
  ];

  
}
