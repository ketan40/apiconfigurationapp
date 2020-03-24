import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRendererComponent } from './api-renderer.component';

describe('ApiRendererComponent', () => {
  let component: ApiRendererComponent;
  let fixture: ComponentFixture<ApiRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
