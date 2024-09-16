import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor( private _httpClient: HttpClient ) { }

  getIPAddress(): any
  {
    return this._httpClient.get("https://api.ipify.org/?format=json")
      .pipe(
        take(1)
      );

  }

  getDataUser(): any
  {
    return this._httpClient.get("https://ipapi.co/json")
      .pipe(
        take(1)
      );

  }

}
