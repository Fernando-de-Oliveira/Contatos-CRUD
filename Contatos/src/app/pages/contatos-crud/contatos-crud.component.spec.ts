import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosCrudComponent } from './contatos-crud.component';

describe('ContatosCrudComponent', () => {
  let component: ContatosCrudComponent;
  let fixture: ComponentFixture<ContatosCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
