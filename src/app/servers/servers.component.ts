import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }
  @Input('srvElement') element:{type:string, name:string, content:string}={type:'',name:'',content:''};


  

  ngOnInit(): void {
  }






}
