import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  serverElements=[{type:'server',name:'TestServer',content:'Just a test!'}];
  
  onServerAdded(serverData:{servername:string,servercontent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.servername,
      content: serverData.servercontent
    });
  }



  onBlueprintAdded(bluedata:{servername:string,servercontent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluedata.servername,
      content: bluedata.servercontent
    });
  }


}
