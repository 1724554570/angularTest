import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { UserDb } from '../model/user.model';

@Injectable()
export class AuthService {

  private dom = '//10.75.104.26:8080/com/';
  private api_url = this.dom + 'ouserAction/login';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  user_login(user: object): Promise<UserDb> {
    return this.http
      .post(this.api_url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as UserDb)
      .catch(this.handleError);
  }


  private handleSuccess(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
