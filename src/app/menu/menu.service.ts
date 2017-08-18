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


@Injectable()
export class MenuService {
    // Resolve HTTP using the constructor
    constructor(private http:Http) {
    }

    // private instance variable to hold base url
    private pageURL = 'http://localhost:8080/api/pageswithoutmenu';
    private menuURL = 'http://localhost:8080/api/menus/';

    // Fetch all existing pages


    // Fetch all existing pages
    getMenus() : Observable<Menu[]> {

        // ...using get request
        console.log(this.http);

        return this.http.get(this.menuURL)
            // ...and calling .json() on the response to return data
            .map((res:Response) => {
                console.log(res);
                return <Menu[]> res.json();
            })
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }


}