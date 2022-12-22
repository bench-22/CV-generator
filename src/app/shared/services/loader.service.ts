import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {LoaderComponent} from "../components/loader/loader.component";

interface Config {
  width?: string
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  dialogRef!: MatDialogRef<LoaderComponent>;
  constructor(private _dialog: MatDialog) { }

  public open(title: string = 'Espere por favor...', config: Config = {width: '200px'}): Observable<boolean> {
    this.dialogRef = this._dialog.open(LoaderComponent, { disableClose: true, backdropClass: 'light-backdrop'});
    this.dialogRef.updateSize(config.width);
    this.dialogRef.componentInstance.title = title;
    return this.dialogRef.afterClosed();
  }

  public close() {
    if(this.dialogRef)
      this.dialogRef.close();
  }
}
