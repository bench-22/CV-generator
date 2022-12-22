import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
  private readonly googleRecaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify'

  constructor(private _http: HttpClient) { }

  siteverify(token: string) {
    return this._http.post(this.googleRecaptchaUrl, {}, {params: {
        response: token, secret: environment.recaptcha_v3_private
      }})
  }
}
