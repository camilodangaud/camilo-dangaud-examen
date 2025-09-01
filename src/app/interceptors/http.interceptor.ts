import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isNewsApi = req.url.includes(environment.NEWS_API_URL);
    if (isNewsApi) {
      const cloned = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${environment.NEWS_API_KEY}`,
          'X-Api-Key': environment.NEWS_API_KEY
        }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
