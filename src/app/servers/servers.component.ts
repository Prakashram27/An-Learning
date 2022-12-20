import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created'
  @Output() serverName :string =  "";
  serverCreated = false;
  serverlist : number[] = [1,8];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);

  }
  ngOnInit(){

  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Created Successfully!... Name is ' + this.serverName
    this.serverlist.push(1)
  }
  onServerUpdate(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value
  } 

}
