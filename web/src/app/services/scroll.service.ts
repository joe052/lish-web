import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}
  div: any;

  /**method to scroll down */
  scrollDown(divId: string) {
    //ensuring intervals only run once
    const setInterval_ID = window.setInterval(() => {
      this.div = document.getElementById(divId);
      this.div!.scrollTop = this.div?.scrollHeight;
    }, 100);
    //stopping interval above after sometime
    window.setTimeout(() => {
      window.clearInterval(setInterval_ID);
    }, 500);
  }
}
