import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandSearchComponent } from './command-search.component';

describe('CommandSearchComponent', () => {
  let component: CommandSearchComponent;
  let fixture: ComponentFixture<CommandSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
