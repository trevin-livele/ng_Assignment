import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contentModel = new Content("Trevin", "Campus", "Department", "21")

  ngOnsubmit(){
    // this.myform.reset();

  }

}
