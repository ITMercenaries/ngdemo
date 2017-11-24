import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    url: string;
    constructor(public http: HttpClient ){
        this.url = 'https://reqres.in/api/users';
    }

    getData() {
        this.http.get( this.url, {responseType: 'text'} ).subscribe( res => {
        //                       { observe: 'response' } --> to see whole response with headers.
            console.log('Result: ', res);
        });
    }
}
