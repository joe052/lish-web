import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  mainDiv: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  /**method to scroll down */
  scrollDown() {
    //ensuring intervals only run once
    const setInterval_ID = window.setInterval(() => {
      this.mainDiv = document.getElementById('main');
      this.mainDiv.scrollTop = this.mainDiv?.scrollHeight;
    }, 100);
    //stopping interval above after sometime
    window.setTimeout(() => {
      window.clearInterval(setInterval_ID);
    }, 500);
  }
}
