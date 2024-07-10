import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Cliente - inicio
export interface cliente {
  nome: string
  dataNascimento: string
  genero: string
  cpf: string
  rg: string
  enderecoEmail: string
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  id: string
}

export interface clienteInfo {
  nome: string
  dataNascimento: string
  genero: string
  cpf: string

}
// Cliente - Fim


@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  cliente: cliente | undefined
  clienteList: cliente[] | undefined

  constructor(private http: HttpClient) { }

  //Cliente

  getAllCliente() {
    return this.http.get<any>('http://127.0.0.1:5000/clientes')
  }

  createNewCliente(formData: any) {
    return this.http.post<any>('http://127.0.0.1:5000/cliente', formData)
  }

  deleteCliente(cpf: any) {
    return this.http.delete<any>(`http://127.0.0.1:5000/cliente?cpf=${cpf}`)
  }

  getClienteInfo(id: string) {
    return this.http.get(`http://127.0.0.1:5000/cliente?id=${id}`)
  }

  putCliente(formData: any) {
    return this.http.put<any>('http://127.0.0.1:5000/cliente', formData)
  }
}
