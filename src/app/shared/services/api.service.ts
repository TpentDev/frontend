import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  loginUser(username: string, password: string) {

  }

  fetchPrinters(page: number, size: number, sortBy: string, sortDir: string) {
    return this.http.get(this.API_URL + '/printer');
  }

  fetchPrinterById(printerId: string) {

  }

  fetchSupplies(page: number, size: number, sortBy: string, sortDir: string) {
    return this.http.get(this.API_URL + '/supply');
  }

  fetchSupplyById(supplyId: string) {

  }

  fetchTransfers(page: number, size: number, sortBy: string, sortDir: string) {

  }

  fetchTransferById(transferId: string) {

  }
}
