import { Component } from "@angular/core";

declare var jquery;
declare var $;

@Component({
    selector: "web-footer",
    moduleId: module.id,
    templateUrl: "./footer.component.html"
})
export class FooterComponent {

    scroll(): void {
        $('html, body').animate({
            scrollTop: $("html").offset().top
        }, 750);
    }

}