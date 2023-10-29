import { Component } from '@angular/core';
import { navbarData } from './navbarData';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  collapsed=false;
  navData=navbarData;

}
