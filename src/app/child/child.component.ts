import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  xyz:string ='';



  constructor(){}
  ngOnInit(): void {
  }

  // @Output() sendData =new EventEmitter<any>();
  // inpdata=''
  // newval=''
  // rcdata=''

  // bhejo(){
  //   this.rcdata=this.inpdata;
  // }

  // displayData(event:any){

  //   // this.newval=this.event.target.val;
  //   this.sendData.emit(event.target.value);
  // }
  
  @Output() sendData = new EventEmitter<string>();
  inpdata = '';

  bhejo() {
    this.sendData.emit(this.inpdata);
  }

  updateValue(event: any) {
    this.inpdata = event.target.value;
  }



}
