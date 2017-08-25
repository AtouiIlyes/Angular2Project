/**
 * Created by atoui on 15/08/2017.
 */
import {Component, OnInit } from '@angular/core';
// import { Response } from '@angular/http';
import {Contact} from "./contact";
import {ContactService} from "./contact.service";
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";

@Component({
    selector: 'my-app',
    templateUrl :'./contact.component.html',
    styleUrls: [ './contact.component.css' ]


})
export class ContactComponent  {
    private contact:Contact = new Contact('','','','','');

    constructor(private contactService: ContactService) { }

    public addMessage(contact){
        console.log(contact);
        this.contactService.addMessage(contact).subscribe(
            response =>  {
                if(response.error) {
                    alert(`The contact Message could not be send, server Error.`);
                } else {
                    alert(` contact Message sended successfully.`);
                }
            },
            error=> {
                alert(`The contact Message could not be send, server Error.`);
            }
        );

    }


    public resetAddContact(){
        this.contact = new Contact('','','','','');
    }
}