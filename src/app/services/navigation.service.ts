import { Injectable } from '@angular/core';
import { faFilm, faTv, faBook, faUserCircle,faBars,faWindowClose, faUser, faPlus, faDollarSign, faBlog} from '@fortawesome/free-solid-svg-icons';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  public showMenu = true;
  public faBars:any = faBars;
  public faWindowClose:any =faWindowClose;
  public items = [
    {icon: faFilm, text: "Movies", link: ""},
    {icon: faTv, text: "TV Shows", link: "tvShows"},
    {icon: faBook, text: "My Library", link: "library"},
    {icon: faUserCircle, text: "Support", link: "support"}
  ]

  public headerNavItems = [
    {icon: faPlus, text: "Add movie", link: "add/movie"},
    {icon: faUser, text: "About", link: "about"},
    {icon: faDollarSign, text: "Pricing", link: "pricing"},
    {icon: faBlog, text: "Blog", link: "blog"},
  ]

  constructor() { }

  public isColapse () {
    if (this.showMenu) {
      this.showMenu = false;
    } else { 
      this.showMenu = true;
    }
    return this.showMenu;
  }
}
