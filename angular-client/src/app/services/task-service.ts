import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  public getAllTask(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(
      'http://localhost:8080/categories', {observe: 'body'});
  }
}
