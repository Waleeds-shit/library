import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ManagersService } from '../managers.service';
import { DarkModeService  } from '../dark-mode.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private darkmode:DarkModeService ,public managers:ManagersService,private toast:NgToastService) { }

  ngOnInit(): void {
  }
  /* istanbul ignore next */
  toggleLightMode(event:Event) {
    let currentTarget = event.currentTarget as HTMLInputElement;
    this.darkmode.isDarkMode = currentTarget.checked
     
  }
  /* istanbul ignore next */
  enterName(event: Event) {
   
    if(this.managers.managers.length<2){
      let target = event.target as HTMLInputElement;
      this.managers.managers.push( target.value);
      target.value=""
    }
    else{
      this.toast.error({detail:"Error Massege",summary:"You are not allowed to enter more than two managers",duration:5000})
    }
  }

}
