import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  public editableDataSubject = new BehaviorSubject<any>('');
  
  constructor() { 
    
  }

}

