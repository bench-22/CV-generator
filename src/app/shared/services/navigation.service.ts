import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  svgIcon?: string; // UI Lib icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  action: string; // actions for access
}

interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;  // Material icon name
  svgIcon?: string; // UI Lib icon name
  sub?: IChildItem[];
  action: string; // actions for access
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

//add modules
enum Modules {
  ADMIN = 'admin',
}

@Injectable({providedIn: 'any'})
export class NavigationService {

  client = '';
  module = 'admin';
  business = '';

  separatorMenu: IMenuItem[] = [];

  plainMenu: IMenuItem[] = [];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  constructor(
    private router: Router
  ) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.publishNavigationChange('icon-menu');
      }
    });
  }

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    switch (menuType) {
      case 'separator-menu':
        this.menuItems.next(this.separatorMenu);
        break;
      case 'icon-menu':
        this.menuItems.next(this.iconMenu);
        break;
      default:
        this.menuItems.next(this.plainMenu);
    }
  }

  get iconMenu(): IMenuItem[] {
    switch (this.module) {
      case Modules.ADMIN:
        const url_admin = `cv/module/admin`;
        return [
          {
            name: 'Dashboard',
            type: 'link',
            tooltip: 'Resumen',
            icon: 'dashboard',
            state: `${url_admin}/dashboard`,
            action: '*'
          },
          {
            name: 'Lista CV',
            type: 'link',
            tooltip: 'Listado de CV',
            icon: 'list',
            state: `${url_admin}/cv/list`,
            action: '*'
          },
          {
            name: 'Configuracion',
            type: 'link',
            tooltip: 'Configuracion',
            icon: 'group',
            state: `${url_admin}/config`,
            action: '*'
          },
        ];
      default:
        return [];
    }
  }
}
