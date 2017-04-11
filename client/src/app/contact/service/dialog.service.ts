import {Injectable} from '@angular/core';
import {MdDialog} from "@angular/material";
import {Contact} from "../contact";
import {ContactDialogComponent} from "../contact-dialog/contact-dialog.component";
import {EditContactDialogComponent} from "../edit-contact-dialog/edit-contact-dialog.component";
import {ContactService} from "./contact.service";

@Injectable()
export class DialogService {

  private contactService: any;

  constructor(private dialog: MdDialog, contactService: ContactService) {
    this.contactService = contactService;
  }


  public contactDialog(contact?: Contact) {
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactService.saveContact(result)
      }
    });
  }

  public editContactDialog(contact?: Contact) {
    let dialogRef = this.dialog.open(EditContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactService.saveContactEdit(result)
      }
    });
  }

  /*
   public mapDialog(address: string){
   let dialogRef = this.dialog.open(MapDialogComponent);
   dialogRef.componentInstance.address = address;
   return dialogRef.afterClosed();
   }
   */

}
