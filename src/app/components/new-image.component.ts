import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.css']
})
export class NewImageComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  @Output() newImage = new EventEmitter<string> ();

  constructor() { }

  ngOnInit() {
  }

  processForm()
  {
    console.log("Here: ", this.form.value);
    this.newImage.next(this.form.value.imageURL);
    this.form.resetForm();
  }
}
