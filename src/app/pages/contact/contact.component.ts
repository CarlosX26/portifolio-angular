import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService, IContactInfo } from "src/app/services/contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactInfo!: IContactInfo;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  formGroup: FormGroup = this.formBuilder.group({
    name: [
      "",
      Validators.compose([Validators.required, Validators.minLength(3)]),
    ],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    message: [
      "",
      Validators.compose([Validators.required, Validators.minLength(10)]),
    ],
  });

  ngOnInit(): void {
    this.contactService.getContactInfos().subscribe((data) => {
      this.contactInfo = data.contact;
    });
  }

  onSubmit(): void {
    const data = this.formGroup.value;

    const urlBase =
      "https://api.whatsapp.com/send?phone=+55++98981464032&text=";

    const message = `*MENSAGEM ENVIADA A PARTIR DE MEU PORTFÓLIO*%0A%0A
----------------------------------------------------------------%0A%0A
*Nome: ${data.name}*%0A%0A
*Email: ${data.email}*%0A%0A
----------------------------Mensagem----------------------------%0A%0A
${data.message}
`;

    window.open(`${urlBase}${message}`, "_blank");

    this.formGroup.reset({
      name: "",
      email: "",
      message: "",
    });
  }
}
