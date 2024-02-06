import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { initCarousels } from 'flowbite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    // initialize carousel
    initCarousels();
  }
}
