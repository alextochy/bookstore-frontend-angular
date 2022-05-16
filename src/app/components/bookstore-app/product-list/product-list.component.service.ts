import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/Book"


@Injectable()

export class BookService
{
    private url = 'https://sheet.best/api/sheets/417ec037-4a65-4d7d-a084-b3aa302baa63';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}


    getBook(){

        return this.http.get(this.url)
    }

    
}