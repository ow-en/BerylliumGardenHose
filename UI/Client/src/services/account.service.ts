import axios from 'axios';
import { UserRegistration } from '@/models/user.registration.interface';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';

class AccountService extends BaseService {
  private static instance: AccountService;
  private constructor() {
    super();
  }

  public static get Instance() {
    // if arguments are needed make this a regular method
    return this.instance || (this.instance = new this());
  }

  public register(userRegistration: UserRegistration): Observable<any> {
    return Observable.fromPromise(
      axios.post(`${this.api}/Accounts`, userRegistration),
    )
      .map((res: any) => true)
      .catch((error: any) => this.handleError(error.response));
  }
}

// export a singleton instance into the global namespace
export const accountService = AccountService.Instance;
