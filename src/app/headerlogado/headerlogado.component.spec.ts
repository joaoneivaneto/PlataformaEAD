import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlogadoComponent } from './headerlogado.component';

describe('HeaderlogadoComponent', () => {
  let component: HeaderlogadoComponent;
  let fixture: ComponentFixture<HeaderlogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlogadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderlogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
