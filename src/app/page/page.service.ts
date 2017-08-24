/**
 * Created by atoui on 23/08/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Page} from "./page";


@Injectable()
export class PageService {
    // Resolve HTTP using the constructor
    constructor(private http:Http) {
    }

    private pageURL = 'http://localhost:8080/api/pageOfAlias/';

    getPage(alias: string) : Observable<Page> {
        return this.http.get(this.pageURL+alias)
            .map((res:Response) => {
                console.log(res);
                return  res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}