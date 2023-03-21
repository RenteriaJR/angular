import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor() { }

  notificationHome(){
    alert('You will go to Home page... Notification service using a Service');
  }
  notificationImage(){
    alert('You will go to Image page... Notification service using a Service');
  }
  notificationMore(){
    alert('You will go to More page... Notification service using a Service');
  }
  

}
