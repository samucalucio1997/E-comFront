import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProduComponent } from './cadastro-produ.component';

describe('CadastroProduComponent', () => {
  let component: CadastroProduComponent;
  let fixture: ComponentFixture<CadastroProduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroProduComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroProduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
