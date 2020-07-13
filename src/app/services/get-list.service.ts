import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { DataService } from './data.service';
import { CacheService } from './cache.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})
export class GetListService {

    constructor(private configService: ConfigService,
        public dataService: DataService,
        public cacheService: CacheService) {

    }

    getUser(obj) {
        return this.dataService.getData(this.configService.BASE_URL_GET, obj)
            .flatMap(rData => {
                console.log(rData, 'User data')
                return Observable.of(rData)
            });
    }

    getUserDetails(obj){
        return this.dataService.getData(this.configService.BASE_URL_POST, obj)
            .flatMap(rData => {
                return Observable.of(rData)
            }).catch(
                error => {
                    console.log(error);
                    return Observable.throw(error)
                }
            )
    }

}