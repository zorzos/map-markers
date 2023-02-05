import { Component } from '@angular/core';
import { LanguageOption } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLanguage: string = 'en_US';
  languages: LanguageOption[] = [
    { label: 'English', package: 'en_US' },
    { label: 'German', package: 'de_DE' }
  ];
  tabs: any[] = [
    { title: 'Map' },
    { title: 'Table' }
  ];
}
