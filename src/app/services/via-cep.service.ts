import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface address {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;

    erro: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class ViaCepService {

    address: address | undefined

    constructor(private httpClient: HttpClient) { }

    getAddressByZipCode(zipcode: string): Observable<address> {
        return this.httpClient.get<address>(`https://viacep.com.br/ws/${zipcode}/json/`);
    }

}
