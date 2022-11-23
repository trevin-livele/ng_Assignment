import { Component, OnInit } from '@angular/core';
import { InfomationService } from '../services/infomation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footer: any =  [];

  constructor(private informationService : InfomationService ) { }

  ngOnInit(): void {
    this.informationService.getData()
    .subscribe(data => this.footer = data);
  }

}
