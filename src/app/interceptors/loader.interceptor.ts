import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from 'src/libs/shared/utils/loader.service';

/**
 *interceptor for http calls
 *
 * @export
 * @class LoaderInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    /**
     *Creates an instance of LoaderInterceptor.
     * @param {LoaderService} loaderService
     * @memberof LoaderInterceptor
     */
    constructor(public loaderService: LoaderService) { }
    /**
     *show loader until the http call is finalized
     *
     * @param {HttpRequest<any>} req
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     * @memberof LoaderInterceptor
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.showLoader();
        return next.handle(req).pipe(
            finalize(() => this.loaderService.hideLoader())
        );
    }
}