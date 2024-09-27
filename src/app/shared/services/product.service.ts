import { Injectable } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductType[] = []
    // {
    //   id: 1,
    //   image: '1.png',
    //   title: 'Мясная Делюкс',
    //   description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    //   datetime: '2022-12-31 15:00:00'
    // },
    // {
    //   id: 2,
    //   image: '',
    //   title: 'Морская Премиум',
    //   description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    //   datetime: '2019-10-11 15:00:00'
    // },
    // {
    //   id: 3,
    //   image: '3.png',
    //   title: 'Бекон и Сосиски',
    //   description: 'Бекон, сыр, сосиски, ананас, томатная паста',
    //   datetime: '2022-12-31 15:00:00'
    //
    // },
    // {
    //   id: 4,
    //   image: '4.png',
    //   title: 'Куриная Делюкс',
    //   description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    //   datetime: '2020-01-16 15:00:00'
    // },
    // {
    //   id: 5,
    //   image: '5.png',
    //   title: 'Барбекю Премиум',
    //   description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    //   datetime: '2022-12-31 15:00:00'
    // },
    // {
    //   id: 6,
    //   image: '6.png',
    //   title: 'Пепперони Дабл',
    //   description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    //   datetime: '2023-06-31 15:00:00'
    // },
    // {
    //   id: 7,
    //   image: '7.png',
    //   title: 'Куриное трио',
    //   description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    //   datetime: '2022-12-31 15:00:00'
    // },
    // {
    //   id: 8,
    //   image: '8.png',
    //   title: 'Сырная',
    //   description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    //   datetime: '2024-02-31 15:00:00'
    // },
  constructor(private http: HttpClient) {}
    getProducts(): Observable<ProductType[]>{
      // let params = new HttpParams()
      // params = params.set('extraField' , 1)
     return this.http.get<ProductType[]>(environment.apiURL + 'pizzas')
      // headers: new HttpHeaders({
      //   Authorization: 'auth-token'
      // }),
      //  // params: params,
      //  observe: 'response' //Полный запрос
    }
    getProduct(id:number): Observable<ProductType>{
      return this.http.get<ProductType>(environment.apiURL + `pizzas?id=${id}`)

      //ajax
    }

    createOrder(data: { product: string, address: string, phone: string}){
      return this.http.post<{ success: boolean, message?: string }>(environment.apiURL + `order-pizza`, data)

    }

}
