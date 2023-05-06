import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExportComponent } from './pipe-export.component';

describe('PipeExportComponent', () => {
  let component: PipeExportComponent;
  let fixture: ComponentFixture<PipeExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
