import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarProdutoComponent } from './pagar-produto.component';

describe('PagarProdutoComponent', () => {
  let component: PagarProdutoComponent;
  let fixture: ComponentFixture<PagarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagarProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
