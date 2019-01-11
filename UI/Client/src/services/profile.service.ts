import axios from 'axios';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';

class ProfileService extends BaseService {
  private static instance: ProfileService;

  private constructor() {
    super();
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  public get(): Observable<any> {
    return Observable.fromPromise(axios.get(`${this.api}/profile/me`))
      .map((res: any) => res.data)
      .catch((error) => this.handleError(error.response));
  }
}

export const profileService = ProfileService.Instance;
