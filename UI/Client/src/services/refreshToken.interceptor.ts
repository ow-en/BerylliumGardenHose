import axios, { AxiosResponse, AxiosInstance, AxiosPromise } from 'axios';
import { Credentials } from '@/models/credentials.interface';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { UserService } from './user.service';
import { filter, take, switchMap } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { NotificationService } from './notification.service';

class RefreshTokenInterceptor extends BaseService {
  public axios: any;
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null,
  );
  constructor(
    private _logger: LoggerService,
    private _notif: NotificationService,
    private _user: UserService,
  ) {
    super();
  }

  public intercept(
    request: AxiosResponse,
    next: AxiosInstance,
  ): Observable<AxiosPromise> {
    return axios.interceptors.request.use(() => {
      (event) => {},
        (error) => {
          if (
            request.url.includes('refreshToken') ||
            request.url.includes('login')
          ) {
            if (request.url.includes('refreshToken')) {
              this._user.logout();
            }

            return throwError(error);
          }

          if (error.status !== 401) {
            return throwError(error);
          }

          if (this.refreshTokenInProgress) {
            return this.refreshTokenSubject
              .pipe(filter((result) => result !== null))
              .pipe(take(1))
              .pipe(
                switchMap(() =>
                  next.handle(this.addAuthenticationToken(request)),
                ),
              );
          } else {
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);

            return this._user.refreshAccessToken().subscribe(
              (res: any) => {
                this.refreshTokenInProgress = false;
                this.refreshTokenSubject.next(res);

                this._user.setAccessToken(res.accessToken, res.refreshToken);
                return next.handle(this.addAuthenticationToken(request));
              },
              (err: any) => {
                this.refreshTokenInProgress = false;

                this._user.logout();
                return throwError(err);
              },
            );
          }
        };
    });
  }

  public addAuthenticationToken(request) {
    const accessToken = this._user.getAccessToken();

    if (!accessToken) {
      return request;
    }

    return request.clone({
      setHeaders: {
        Authorization: this._user.getAccessToken(),
      },
    });
  }
}
