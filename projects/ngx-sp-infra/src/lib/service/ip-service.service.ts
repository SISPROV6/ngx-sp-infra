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

  getDataBrowserUser(): { browser: string; versionBrowser: string; so: string }
  {
    const navigatorInfo = navigator as any;

    let browser: string = '';
    let versionBrowser: string = '';
    let so: string = '';

    if (navigatorInfo.userAgentData) {
      const uaData = navigatorInfo.userAgentData;

      browser = uaData.brands[2].brand;
      versionBrowser = uaData.brands[2].version;
      so = uaData.platform;
    }

    return { browser, versionBrowser, so };
  }



}
