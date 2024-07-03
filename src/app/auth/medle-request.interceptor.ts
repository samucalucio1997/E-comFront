import { HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class MedleRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      var token = localStorage.getItem('token')!=''?localStorage.getItem('token'):'';
      console.log(token);
      if (req && token) {
        const new_req = req.clone({
          headers: req.headers.set('Authorization','')
        });
        return next.handle(new_req);
      }else{
        return next.handle(req);
      }
    } catch (error) {
      console.error(error);
      return next.handle(req);
    }
  }
}
