import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleApiService {

  constructor(private http:HttpClient) {
   }

   getAllPosts(obj:any){
    const url = "https://gorest.co.in/public/v2/posts";
    return this.http.get(url,{params:{ page: obj} });
   }
   getTotalPosts(){
    const url = "https://gorest.co.in/public/v2/posts";
    return this.http.get(url);
   }

   getAllComments(obj:any){
    const url = "https://gorest.co.in/public/v2/comments";
    return this.http.get(url,{params: {post_id:obj} });
   }

   getUserDetails(obj:any){
    const url = "https://gorest.co.in/public/v2/users/"+obj;
    return this.http.get(url);
   }
}
