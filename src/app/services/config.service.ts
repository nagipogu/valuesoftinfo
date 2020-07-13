import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    public BASE_URL_GET = "https://jsonplaceholder.typicode.com/users";
    public BASE_URL_POST = "https://jsonplaceholder.typicode.com/posts";
}