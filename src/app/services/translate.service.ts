import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TranslateText } from './translate-text';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})

export class TranslateService {
  langs = {
    'Chinese (Simplified)': 'zh-CN',
    'traditional Chinese': 'zh-TW',
    'French': 'fr',
    'Italian': 'it',
    'Japanese': 'ja',
    'Vietnamese': 'vi',
    'English': 'en',
  }

  constructor(private _http: HttpClient) {

  }


  translate(obj: TranslateText, key: string) {
    let url = `https://translation.googleapis.com/language/translate/v2?q=${obj.q}&target=${this.langs[obj.target]}&key=${key}`;
    return this._http.get(url).toPromise().then((response: any) => {
      let text = response.data.translations[0].translatedText;
      return text;
    });
  }

  getTargetLang(country: string){
    return this.langs[country];
  }

}



