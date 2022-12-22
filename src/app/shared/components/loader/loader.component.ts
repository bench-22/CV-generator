import {Component, OnInit} from '@angular/core';
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit{
  title!: string;
  message!: string;
  progressSpinnerMode!: ProgressSpinnerMode;

  constructor(public dialogRef: MatDialogRef<LoaderComponent>) {}

  ngOnInit(): void {
    this.progressSpinnerMode = 'indeterminate'
  }

}
