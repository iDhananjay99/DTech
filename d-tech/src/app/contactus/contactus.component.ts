import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service'
import {Contact} from '../contactForm'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
    contactArr = Contact[]
    fullname: string;
    email: string;
    mobile: number;
    description: string;

  constructor(private contact: ContactService) {
    this.contact.getContacts().subscribe( data => this.contactArr = data) 
   }

  ngOnInit(): void {
  }

}
