import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let appShell: ShellComponent
  let fixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;

  // Analisys TestBed versus with out
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appShell = new ShellComponent()
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app shell', () => {
    expect(appShell).toBeTruthy();
  });
  
  it('should display original title ', () => {
    expect(h1.textContent).toContain(component.title)
  });

  it('should have as title user-management', () => {
    expect(component.title).toEqual('user-management');
  });

  it('should have as subtitle new subtitle', () => {
    expect(component.subtitle).toEqual('new subtitle');
  });

});
