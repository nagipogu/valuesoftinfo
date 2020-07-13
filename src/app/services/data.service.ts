import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CacheService } from "./cache.service";

@Injectable()
export class DataService {
    constructor(private http: HttpClient,
        public cacheService: CacheService) {
    }

    getData(url: string, params): Observable<any> {
        return this.http.get(url)
            .map((res: Response) => {
                return res;
            })
            .catch(error => {
                return Observable.throw(error)
            });
    }

    postData(url: string, body: any): Observable<any> {
        return this.http.post(url, body)
            .map(
                (response: Response) => {
                    return response;
                }).catch(
                    error => {
                        console.log(error);
                        return Observable.throw(error)
                    }
                )
    }


}