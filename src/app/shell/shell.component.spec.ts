import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import { environment } from 'src/environments/environment';
import { GroupsComponent } from '../content/home/groups/groups.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let componentVisit: GroupsComponent;
  let fixture: ComponentFixture<ShellComponent>;
  let element: Element
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should create the visit component ', () => {
    componentVisit = new GroupsComponent();
    expect(componentVisit).toBeTruthy();
    expect(componentVisit).toBeDefined();
  });

  it('should be plantit-web-frame in DOM', () => {
    fixture.detectChanges();
    expect(element.querySelector('plantit-web-frame')).toBeTruthy();
  });

  it('should be app-groups in DOM', () => {
    fixture.detectChanges();
    expect(element.querySelector('app-groups')).toBeTruthy();
  });

  it('should be h1 in DOM', () => {
    fixture.detectChanges();
    expect(element.querySelector('h1')).toBeTruthy();
  });

  // Because i can not test interpolation direct on the element, i will test the value definition in my component

  it('should be serverUrl defined and Equal to some value and contained https', () => {
    fixture.detectChanges();
    expect(component.serverUrl).toEqual(environment.pitBaseServerUrl);
    expect(component.serverUrl).toContain('https');
  });

  
  it('should be clientId defined and Equal to some value', () => {
    fixture.detectChanges();
    expect(component.clientId).toEqual(environment.clientId);
    expect(component.clientId).toEqual('Angular');
  });

  
  it('should be redirectUri defined and Equal to some value', () => {
    fixture.detectChanges();
    expect(component.redirectUri).toEqual(environment.pitBaseRedirectUrl);
  });

  
  it('should be scopes defined and Equal to some value', () => {
    fixture.detectChanges();
    expect(component.scopes).toEqual(environment.scopes);
  });

  it('should have attributes language', () => {
    fixture.detectChanges();
    expect(element.querySelector('plantit-web-frame').getAttribute('language')).toEqual('en')
  });

  // it('should have attribute server-url', () => {
  //   fixture.detectChanges();
  //   // console.log(element.querySelector('plantit-web-frame').attributes)
  //   expect(element.querySelector('plantit-web-frame').getAttribute('server-url')).toEqual('http://')
  // });

});
