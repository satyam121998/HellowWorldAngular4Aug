import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CartService} from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getItems', () => {
    expect(service.getItems()).toEqual(service.ItemList);
  })

  it('should call getSalarySlip', () => {
    spyOn(service, 'checkAuthentication').and.returnValue(true);
    expect(service.getSalarySlip()).toEqual("Salary Slip");
    expect(service.checkAuthentication).toHaveBeenCalled();
  })

  it('should call getSalarySlip', () => {
    spyOn(service, 'checkAuthentication').and.returnValue(true);
    expect(service.getSalarySlip()).toEqual("Salary Slip");
    expect(service.checkAuthentication).toHaveBeenCalledTimes(1);
  })

  
});

