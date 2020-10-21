import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config,URI} from '../_shared/config';
import { formatDate } from '@angular/common';
import Post from '../_models/post';
const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
    })
};
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(createdAt: Date) {
    let formatedDate =  formatDate(createdAt,'MM-dd-yyyy','en-US');
    return this.http.get<Post[]>(`${Config.apiUrl}${URI.getPosts}/${formatedDate}`,optionRequete);
  }
}
