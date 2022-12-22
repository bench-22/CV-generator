import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {ClassValidator} from "../../../shared/validators/email";
import {UserCredential} from "@angular/fire/auth";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../shared/services/loader.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild(MatProgressBar) progressBar!: MatProgressBar;
  @ViewChild(MatButton) submitButton!: MatButton;

  hide = true;
  formGroup!: FormGroup;

  private _disposed$ = new Subject<void>();

  //no pienso usar nada de estop
  errorMsg = '';
  cargado = false;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private _firebase: FirebaseService,
    private _loader: LoaderService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._initialize().catch();
  }

  ngOnDestroy() {
    this._disposed$.next();
    this._disposed$.complete();
  }

  async signing(): Promise<void> {
    this._loader.open();
    const {username, password} = this.formGroup.value;
    this._firebase.signIn(username, password)
      .then(async (fireUser: UserCredential) => {
        this._loader.close();
        console.log(fireUser);
        const {user} = fireUser;
        if (user.emailVerified) {
          console.log('Email verificado, esta autenticado');
          sessionStorage.setItem('email', user.email ?? '');
          await this._router.navigate([''], {relativeTo: this._activatedRoute})
        } else {
          //mostrar error de email no verificado
        }
      }).catch(async (err: any) => {
      this._loader.close();
      console.log(err);
      //mostrar error de usuario no valido
    })
  }


  private async _initialize() {
    this.formGroup = this._fb.group({
      username: new FormControl('', [Validators.required, Validators.pattern(ClassValidator.validEmail)]),
      password: new FormControl('', Validators.required)
    })

    // const user = await this._firebase.isLoggedIn()
    // if (user) {
    //   //haremos algo cuando ya este logueado
    //   this.cargado = true;
    //   console.log(user);
    // }
  }

}
