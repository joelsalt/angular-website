import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { FooterComponent } from "./components/footer/footer.component";
import { IndexComponent } from "./components/index/index.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        ContactFormComponent,
        FooterComponent,
        IndexComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
