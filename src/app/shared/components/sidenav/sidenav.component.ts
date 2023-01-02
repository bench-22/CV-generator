import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input("items") public menuItems: any[] = [];
  @Input("hasIconMenu") public hasIconTypeMenuItem: boolean | undefined;
  @Input("iconMenuTitle") public iconTypeMenuTitle: string | undefined;

  constructor() {}
  ngOnInit() {}
}
