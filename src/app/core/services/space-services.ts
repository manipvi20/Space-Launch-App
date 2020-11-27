import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpaceServices {
  apiUri = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private http: HttpClient) { }

  public getSpaceDetails(year?: number, launch?: boolean, land?: boolean): Observable < any[] > {
    return this.http.get < any[] > (this.apiUri +
      (!!year ? '&launch_year=' + year : '') +
      (!!launch ? '&launch_success=' + launch : '') + (!!land ? '&land_success=' + land : ''));
  }
}
