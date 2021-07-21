import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // TODO: cambiar a false
  private _userIsAuthenticated = true;
  private _userId = 'xyz';

  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }

  constructor() { }

  get userId(){
    return this._userId;
  }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
