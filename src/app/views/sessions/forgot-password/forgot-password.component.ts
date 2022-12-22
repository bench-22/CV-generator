import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {ClassValidator} from "../../../shared/validators/email";
import {environment} from "../../../../environments/environment";
import {RecaptchaService} from "../../../shared/services/recaptcha.service";
import {LoaderService} from "../../../shared/services/loader.service";

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
    private _loader: LoaderService,
    private _recaptchaService: RecaptchaService,
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
    grecaptcha.ready(async () => {
      this._loader.open();
      const tokenRecaptcha = await grecaptcha.execute(environment.recaptcha_v3_public, {action: 'submit'});
      console.log(tokenRecaptcha);
      this._recaptchaService.siteverify(tokenRecaptcha).pipe(takeUntil(this._disposed$)).subscribe({
        next: res => {
          console.log(res)
          this._loader.close()
        },
        error: err => {
          console.log(err)
          this._loader.close()
        }
      })
    });
  }

  private async _initialize() {
    this.formGroup = this._fb.group({
      username: new FormControl('', [Validators.required, Validators.pattern(ClassValidator.validEmail)]),
    })
  }

}
