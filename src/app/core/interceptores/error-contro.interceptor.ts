import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorControInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set('Extra-Curso', 'cabeceraExtra'),
    });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        window.alert(`Error al obtener los detalles del Pokémon`);
        return throwError(() => error);
      })
    );
  }
}
