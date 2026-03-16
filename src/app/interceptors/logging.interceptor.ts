import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = Date.now();
    console.log(`Request: ${req.method} ${req.url}`);
    return next.handle(req).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          const time = Date.now() - start;
          console.log(`Response: ${req.method} ${req.url} took ${time}ms`);
        }
      }),
      catchError(error => {
        console.error(`Error: ${req.method} ${req.url}`, error);
        return throwError(error);
      })
    );
  }
}