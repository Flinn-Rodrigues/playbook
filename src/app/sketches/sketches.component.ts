import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.css']
})
export class SketchesComponent {
  artists = [
    { productName: 'book', url: 'https://p7.hiclipart.com/preview/291/636/987/drawing-book-sketch-book.jpg', highlight: true},
    { productName: 'building', url: 'https://p7.hiclipart.com/preview/596/519/819/architecture-drawing-building-sketch-building.jpg', highlight: true},
    { productName: 'girl', url: 'https://c7.uihere.com/files/132/531/613/line-art-sketch-fan-art-deviantart-anime-lineart-transparent-thumb.jpg', highlight: true},
    { productName: 'rose', url: 'https://tl.vhv.rs/dpng/s/337-3370306_black-and-white-sketch-black-sketches-transparent-background.png', highlight: true}
  ];
}

