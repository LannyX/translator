import { Component, OnInit } from '@angular/core';
import { SearchHistory } from './search-history';
import {HistoryService} from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class SearchHistoryComponent implements OnInit {
  historyRecords: SearchHistory[];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {

    // this.historyRecords = this.historyService.getRecords();
    // console.log(this.historyRecords);

    this.historyService.getUserRecords()
      .subscribe(
        value => {
          const history = [];
          for (const prop in value) {
            if (value.hasOwnProperty(prop)) {
              history.push(value[prop]);
            }
          }
          console.log(history);
          this.historyRecords = history.sort((a,b)=>{ return b.timestamp < a.timestamp ? -1 : 1 });
          console.log(this.historyRecords);
        }
      );
  }
  
}
