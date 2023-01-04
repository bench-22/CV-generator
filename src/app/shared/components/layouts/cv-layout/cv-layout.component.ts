import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {filter, Observable, Subscription} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {NavigationService} from "../../../services/navigation.service";
import {FirebaseService} from "../../../services/firebase.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-cv-layout',
  templateUrl: './cv-layout.component.html',
  styleUrls: ['./cv-layout.component.scss']
})
export class CvLayoutComponent implements OnInit {

  public menuItems!: any[];
  public hasIconTypeMenuItem!: boolean;
  public iconTypeMenuTitle!: string;
  private menuItemsSub!: Subscription;
  imageUrl: string = 'assets/images/avatars/mentor.png';
  selectedItem: string = '';


  //ESRTO NO PUEDE ESTAR ACA DEBE VENIR DEL SERVICIO
  menu = [
    {
      name: 'Inicio',
      type: 'link',
      tooltip: 'Resumen',
      icon: 'dashboard',
      state: `/cv/module/admin/dashboard`,
      action: '*'
    },
    {
      name: 'Lista CV',
      type: 'link',
      tooltip: 'Listado de empresas',
      icon: 'playlist_add',
      state: `/cv/module/admin/cv/list`,
      action: '*'
    },
    {
      name: 'Configuración',
      type: 'link',
      tooltip: 'Configuracion',
      icon: 'settings',
      state: `/cv/module/admin/config/index`,
      action: '*'
    },
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public firebase: FirebaseService,
              private actRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.setItemMenu();
    this.changeItemSelectedInMenu();
    this.actRoute.children[0].url.subscribe(res => console.log(res[0].path));
  }

  changeItemSelectedInMenu() {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((value) => {
      console.log('fin de ruta', value)
      this.setItemMenu();
    });
  }

  setItemMenu() {
    this.selectedItem = this.router.url;
  }

}
