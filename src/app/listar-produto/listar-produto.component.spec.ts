import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutoComponent } from './listar-produto.component';

describe('ListarProdutoComponent', () => {
  let component: ListarProdutoComponent;
  let fixture: ComponentFixture<ListarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
