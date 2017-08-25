/**
 * Created by atoui on 15/08/2017.
 */
/**
 * Created by atoui on 15/08/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Contact} from "./contact";

@Injectable()
export class ContactService {

    constructor (private http: Http) {}
    private contactsUrl = 'http://localhost:8080/api/contacts';



    public addMessage(contact:Contact) {
        console.log(contact);
        return this.http.post(`${this.contactsUrl}`,contact)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}