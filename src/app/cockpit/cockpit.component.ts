import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newServerName: string = '';
  newServerContent: string = '';
  serverElements: Array<{type: string, name: string, content: string}> = [];

  @Output() serverCreated=new EventEmitter<{servername:string,servercontent:string}>();
  @Output() blueprintCreated=new EventEmitter<{servername:string,servercontent:string}>();



  onAddServer() {
   this.serverCreated.emit({servername:this.newServerName, servercontent:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({servername:this.newServerName,servercontent:this.newServerContent})
  }

}




