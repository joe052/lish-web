import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  
  /**method to toggle header */
  toggleHeader() {
    document.getElementById('navbar-sticky')?.classList.toggle('hidden');
  }

  
  openApplyForm(){
    window.open('https://forms.gle/QjpU6RgWvUprVDGf6','_blank');
  }
}
