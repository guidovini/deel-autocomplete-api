import { Injectable } from '@nestjs/common';

import { data } from './company.data';
import { Company } from './company.model';

@Injectable()
export class CompanyService {
  getCompanies(): Company[] {
    return data;
  }
}
