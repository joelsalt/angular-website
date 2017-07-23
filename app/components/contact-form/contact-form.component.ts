import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

declare var jquery;
declare var $;

@Component({
    selector: "contact-form",
    moduleId: module.id,
    templateUrl: "./contact-form.component.html"
})
export class ContactFormComponent implements OnInit {
    
    contact: any = {
        name: "",
        details: "",
        message: ""
    }
    nameClass: string;
    detailClass: string;
    messageClass: string;

    send(): void {
        var $name = $(".name");
        var $details = $(".details");
        var $message = $(".message");

        if (this.contact.name.length > 0 && this.contact.details.length > 0 && this.contact.message.length > 0) {
            $.post(
                "https://script.google.com/macros/s/AKfycbxXODQVFl9b0Z1G_QTChUctDORBe3j2T-wvcUX-XYX9rHxWTUXa/exec",
                this.contact,
                function () {
                    console.log("success!");
                }
            );

            $("#gform").fadeOut("fast", function () {
                $("#gform").replaceWith("<h1>Thanks!</h1><p> Your message is on its way. I'll respond to it as soon as possible!</p>")
                    .fadeIn("fast");
            });
            $("#thanks").removeClass("hidden");
        }
        else {
            if (!$name.val()) {
                $("#nameAlert").addClass("active");
                $(".name").addClass("border-danger");
            }
            if (!$details.val()) {
                $("#detailsAlert").addClass("active");
                $(".details").addClass("border-danger");
            }
            if (!$message.val()) {
                $("#messageAlert").addClass("active");
                $(".message").addClass("border-danger");
            }
        }
    }

    checkName(): void {
        var length = this.contact.name.length;
        $("#nameNumber").text(30 - length);

        if (length > (30 / 3) * 2) {
            this.nameClass = "text-danger";
        }
        else if (length > 30 / 3) {
            this.nameClass = "text-warning";
        }
        else {
            this.nameClass = "text-success";
        }

        if (length > 0 && $(".name").hasClass("border-danger")) {
            $(".name").removeClass("border-danger");
            $("#nameAlert").removeClass("active");
        }
        else if (length > 0) {
            $(".name").addClass("border-success");
        }
    }

    checkDetails(): void {
        var length = $(".details").val().length;
        $("#detailNumber").text(50 - length);

        if (length > (50 / 3) * 2) {
            this.detailClass = "text-danger";
        }
        else if (length > 50 / 3) {
            this.detailClass = "text-warning";
        }
        else {
            this.detailClass = "text-success";
        }

        if (length > 0 && $(".details").hasClass("border-danger")) {
            $(".details").removeClass("border-danger");
            $("#detailsAlert").removeClass("active");
        }
        else if (length > 0) {
            $(".details").addClass("border-success");
        }
    }

    checkMessage(): void {
        var length = $(".message").val().length;
        $("#messageNumber").text(300 - length);

        if (length > (300 / 3) * 2) {
            this.messageClass = "text-danger";
        }
        else if (length > 300 / 3) {
            this.messageClass = "text-warning";
        }
        else {
            this.messageClass = "text-success";
        }

        if (length > 0 && $(".message").hasClass("border-danger")) {
            $(".message").removeClass("border-danger");
            $("#messageAlert").removeClass("active");
        }
        else if (length > 0) {
            $(".message").addClass("border-success");
        }
    }

    ngOnInit(): void {
        this.checkName();
        this.checkDetails();
        this.checkMessage();
    }
}