import { Component } from '@angular/core';

interface Image {
  imageURL: string;
  time: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: Image[] = [];

  processImage(imageURL: string) {
    console.log('App Component: ', imageURL);
    this.images.unshift({
      imageURL: imageURL,
      time: (new Date()).toString()
    });
  }
}
