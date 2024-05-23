import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeFieldComponent } from './compose-field.component';

describe('ComposeFieldComponent', () => {
  let component: ComposeFieldComponent;
  let fixture: ComponentFixture<ComposeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
