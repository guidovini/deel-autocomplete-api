import { Controller, Get } from '@nestjs/common';

import { Company } from './company.model';
import { CompanyService } from './company.service';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  findAll(): Company[] {
    return this.companyService.getCompanies();
  }
}
