import { Component } from '@angular/core';
declare const readDocument: any;
declare const saveDocument: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-editor-app';

  onChangeLoad(event: any) {
    readDocument(event);
  }

  onClickSave() {
    saveDocument();
  }

}