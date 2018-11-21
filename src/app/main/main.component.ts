import { Component, OnInit, Input } from '@angular/core';
import { Wikipedia } from '../services/wikipedia';
import { TranslateText } from '../services/translate-text';
import { googleApi } from 'src/environments/environment';
import { WikipediaService } from '../services/wikipedia.service';
import { HistoryService } from '../services/history.service';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  translatedWords = []
  selectTarget = "French"
  targets = ['French', 'Italian', 'Japanese', 'Vietnamese', 'Chinese (Simplified)', 'traditional Chinese' ]


  constructor(private wikipediaService: WikipediaService,
    private historyService: HistoryService,
    private translateService: TranslateService) {
  }

  @Input() wikipedia: Wikipedia;
  ngOnInit() {
    console.log(this.wikipedia)
  }

  translate(content: string): void {
    var googleObj = new TranslateText(content, this.selectTarget);
    let target = this.selectTarget;
    this.translateService.translate(googleObj, googleApi.key).then(
      (result: any) => {
        this.translatedWords = result.split(' ');
        this.historyService.addTranslateHistory(content, target);
      },
      err => {
        console.log(err);
      }
    );
  }

}
