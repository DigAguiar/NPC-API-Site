import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheNpcComponent } from './detalhe-npc.component';

describe('DetalheNpcComponent', () => {
  let component: DetalheNpcComponent;
  let fixture: ComponentFixture<DetalheNpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheNpcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
