import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  /**method to scroll down */
  scrollDown() {
    //ensuring intervals only run once
    const setInterval_ID = window.setInterval(() => {
      const projDiv = document.getElementById('projects');
      // projDiv!.scrollTop = projDiv?.scrollHeight;
    }, 100);
    //stopping interval above after sometime
    window.setTimeout(() => {
      window.clearInterval(setInterval_ID);
    }, 500);
  }
}
