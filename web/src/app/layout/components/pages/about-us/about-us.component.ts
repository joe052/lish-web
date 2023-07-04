import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  /**scrolldown immediately after adding new project */
  scrollDown() {
    // //ensuring intervals only run once
    // if (this.projectService.getAddStatus() === true) {
    //   const setInterval_ID = window.setInterval(() => {
    //     this.projDiv = document.getElementById('projects');
    //     this.projDiv.scrollTop = this.projDiv?.scrollHeight;
    //   }, 100);
    //   //stopping interval above after sometime
    //   window.setTimeout(() => {
    //     window.clearInterval(setInterval_ID);
    //   }, 500);
    // }
    // //unsetting the condition
    // this.projectService.setAddStatus(false);
    // //console.log(this.projectService.getAddStatus());
  }
}
