import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface candy {
  categoria: string
  descricao: string
  genero: string
  id: string
  imagem: string
  valor_atual: number
}

export interface candyInfo {
  avaliacoes: avaliacoes[]
  categoria: string
  descricao: string
  genero: string,
  id: number,
  imagem: string,
  total_avaliacoes: number,
  valor_atual: number
}

interface avaliacoes {
  desc_avaliacao: string
}

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  candy: candy | undefined
  candyList: candy[] | undefined

  constructor(private http: HttpClient) { }

  getAllCandy() {
    return this.http.get<any>('http://127.0.0.1:5000/doces')
  }

  createNewCandy(formData: any) {
    return this.http.post<any>('http://127.0.0.1:5000/doce', formData)
  }

  deleteCandy(descricao: any) {
    return this.http.delete<any>(`http://127.0.0.1:5000/doce?descricao=${descricao}`)
  }

  getCandyInfo(id: string) {
    return this.http.get(`http://127.0.0.1:5000/doce?id=${id}`)
  }

  createAssessment(formData: any) {
    return this.http.post<any>('http://127.0.0.1:5000/avaliacao', formData)
  }

}