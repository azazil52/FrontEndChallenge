import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class DemoService {
 
    //private API_URL = 'https://elephant-api.herokuapp.com/elephants';
    private API_URL = 'https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants';

    constructor(private http:HttpClient) {}

    public sendGetRequest() {
        return this.http.get(this.API_URL);
    }
 
}