import axios from 'axios';
import { BaseService } from './base.service';

class DashboardService extends BaseService {
  private static instance: DashboardService;

  private constructor() {
    super();
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  public getHomeDetails(): Promise<any> {
    return axios.get(`${this.api}/dashboard/home`);
  }
}

export const dashboardService = DashboardService.Instance;
