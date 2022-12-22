import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {EmailValidator} from "../../../shared/validators/email";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;

  private _disposed$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _firebase: FirebaseService,
  ) {
  }

  ngOnInit() {
    this._initialize().catch();
  }

  ngOnDestroy() {
    this._disposed$.next();
    this._disposed$.complete();
  }

  reset() {
  }

  private async _initialize() {
    this.formGroup = this._fb.group({
      username: new FormControl('', [Validators.required, Validators.pattern(EmailValidator.validEmail)]),
    })
  }

}
