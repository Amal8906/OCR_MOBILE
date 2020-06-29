import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService: NgxSpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(req).pipe(
            // take(5),
            finalize(() => {this.loaderService.hide()})
        );
    }
}
