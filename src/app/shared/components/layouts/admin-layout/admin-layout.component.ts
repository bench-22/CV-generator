import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html',
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
  public isModuleLoading: Boolean = false;
  private _routerEventSub!: Subscription;
  public _scrollConfig = {}
  public _layoutConf: any = {};
  public _adminContainerClasses: any = {};

  constructor(
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() { }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.layout.adjustLayout(event);
  // }

  ngAfterViewInit() {  }

  // scrollToTop() {
  //   if (document) {
  //     setTimeout(() => {
  //       let element;
  //       if (this.layoutConf.topbarFixed) {
  //         element = <HTMLElement>document.querySelector('#rightside-content-hold');
  //       } else {
  //         element = <HTMLElement>document.querySelector('#main-content-wrap');
  //       }
  //       element.scrollTop = 0;
  //     })
  //   }
  // }

  // updateAdminContainerClasses(layoutConf) {
  //   return {
  //     'navigation-top': layoutConf.navigationPos === 'top',
  //     'sidebar-full': layoutConf.sidebarStyle === 'full',
  //     'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',
  //     'compact-toggle-active': layoutConf.sidebarCompactToggle,
  //     'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',
  //     'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',
  //     'sidebar-closed': layoutConf.sidebarStyle === 'closed',
  //     'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'
  //   }
  // }

}
