import { Component, OnInit } from '@angular/core';
import { InfomationService } from '../services/infomation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public header: any =  [];

  constructor(private informationService : InfomationService ) { }

  ngOnInit(): void {
    this.informationService.getHeaderData()
    .subscribe(data => this.header = data);
  }

}
