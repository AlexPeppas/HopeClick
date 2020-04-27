import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  elapsed: any = {
    h : '00',
    m : '00',
    s : '00'
  };

  overAllTimer : any = false ;
  
stopTimer(){
  clearInterval(this.overAllTimer);
  clearInterval(this.timer);
  this.timer = 0;
  this.progress = 0 ;
  this.percent = 0 ;
  this.overAllTimer = false;
  this.elapsed={
    h: '00',
    m: '00',
    s: '00'
  };
  
  console.warn(this.counterRests);
  // this.elapsed.h = '00';
  // this.elapsed.m = '00';
  // this.elapsed.s = '00';
}
  overAllTime(){
    this.overAllTimer = false; 

    this.overAllTimer = setInterval ( ()=>{
    if (!this.timer) //otan trexei o rest counter na ginetai pause o overall ths proponhshs
    {
      if (this.elapsed.s<59)
        if (this.elapsed.s>=9)  
          this.elapsed.s++;
        else 
          {
            var tempS = parseInt(this.elapsed.s);
            tempS++;
            this.elapsed.s = ((tempS/10).toString()).replace('.',"");
          }
      else
      {
        if (this.elapsed.m<59)
        { 
          if (this.elapsed.m>=9) 
            this.elapsed.m++;
          else
          {
            var tempM = parseInt(this.elapsed.m);
            tempM++;
            this.elapsed.m = ((tempM/10).toString()).replace('.',"");
          }
          this.elapsed.s=0;
        }else{
          if (this.elapsed.h>=9) 
            this.elapsed.h++;
          else
          {
            var tempH = parseInt(this.elapsed.h);
            tempH++;
            this.elapsed.h = ((tempH/10).toString()).replace('.',"");
          }
          this.elapsed.m=0;
          this.elapsed.m=0;
        } 
      }
    } 
    },1000)
  }
  //constructor() {}
  fullTime : any = "00:00:45";
  
  percent : number = 0;
  radius : number = 100;

  progress : any = 0; 
  
  timer: any = false;

  minutes: number = 0;
  seconds : any = 45;

  counterRests : number = 0;

  startTime(){   
    
    this.counterRests ++;
    if (this.timer){
     clearInterval(this.timer);
    }
    
    this.progress = 0; //initiallize the progress in every call
    
    this.timer = false; //initiallize the timer in every call

    this.percent = 0 ;
    let splitting = this.fullTime.split(':');
    this.minutes = splitting[1];
    this.seconds = splitting[2];

    let totalSeconds = Math.floor(this.minutes*60) + parseInt(this.seconds);

    this.timer = setInterval(() => {

      if (this.progress == totalSeconds)
        {
          
          clearInterval(this.timer); //this terminates the timer interval
          this.timer = false; // to kanw false wste na sinexisei na metraei o overall counter
          this.percent = 0;
        }
      this.percent = Math.floor((this.progress/totalSeconds)*100);
      this.progress++;
    },1000) // set a timer which goes trough a specifc process every 1000msec
  }
}
