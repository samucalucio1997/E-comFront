import { TestBed } from '@angular/core/testing';

import { ListarProdutoServiceService } from './listar-produto-service.service';

describe('ListarProdutoServiceService', () => {
  let service: ListarProdutoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarProdutoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
