import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IContactInfo {
  name: string;
  tel: string;
  email: string;
}

interface IResponseContactInfos {
  subject_matter: string;
  comment: string;
  contact: IContactInfo;
}

@Injectable({
  providedIn: "root",
})
export class ContactService {
  baseUrl: string =
    "https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail";

  constructor(private http: HttpClient) {}

  getContactInfos(): Observable<IResponseContactInfos> {
    return this.http.get<IResponseContactInfos>(this.baseUrl);
  }
}
