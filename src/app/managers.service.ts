import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  managers:string[]=[]
  constructor() { }
}
