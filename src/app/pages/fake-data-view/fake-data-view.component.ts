import { Component, OnInit } from '@angular/core';

import { FakeServiceService } from 'src/app/services/fake-service.service';

@Component({
  selector: 'app-fake-data-view',
  templateUrl: './fake-data-view.component.html',
  styleUrls: ['./fake-data-view.component.css']
})
export class FakeDataViewComponent implements OnInit {

  constructor( private fakeService: FakeServiceService){ }
  
  ngOnInit() {
    this.getFakeData()
  }


  getFakeData(){
    this.fakeService.fakeDataList()
      .subscribe( data => {
        console.log(data);
      })
  }

}
