/**
 * Created by atoui on 18/08/2017.
 */
/**
 * Created by atoui on 17/08/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Menu} from "./menu";
import {Page} from "../page/page";


@Injectable()
export class MenuService {
    // Resolve HTTP using the constructor
    constructor(private http:Http) {
    }

    // private instance variable to hold base url
    private pageURL = 'http://localhost:8080/api/pages/';
    private menuURL = 'http://localhost:8080/api/menus/';
    private menuAlias="http://localhost:8080/api/menusAlias/"

    // Fetch all existing pages


    // Fetch all existing pages
    getMenus() : Observable<Menu[]> {

        // ...using get request
        console.log(this.http);

        return this.http.get(this.menuAlias)
            // ...and calling .json() on the response to return data
            .map((res:Response) => {
                console.log(res);
                return <Menu[]> res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }


    getPage(id: string) : Observable<Page> {
        return this.http.get(this.pageURL+id)
            .map((res:Response) => {
                console.log(res);
                return  res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    
}