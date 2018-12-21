import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})
export class SideNavigationBarComponent implements OnInit {

  colapseBar:boolean = true;

  constructor(private _navigationServise: NavigationService) {}

  isColapsed() {
    this.colapseBar = this._navigationServise.isColapse();
  }

  ngOnInit() {
    
  }

}
