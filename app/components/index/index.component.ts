import { Component, OnInit } from '@angular/core';

declare var jquery;
declare var $;

@Component({
    selector: 'index-page',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
    moduleId: module.id
})
export class IndexComponent implements OnInit {

    currentIcon: string;
    iconsList: string[] = [
        "fa-code",
        "fa-power-off",
        "fa-smile-o",
        "fa-snowflake-o",
        "fa-bomb",
        "fa-cog",
        "fa-chain",
        "fa-arrows"
    ];

    randomIcon(): string {
        return this.iconsList[Math.floor(Math.random() * this.iconsList.length)];
    }

    removeIcon() {
        $(".main-icon i").removeClass(this.currentIcon);
    }

    setIcon() {
        this.removeIcon();
        var oldIcon = this.currentIcon;
        this.currentIcon = this.randomIcon();
        while (oldIcon === this.currentIcon) {
            this.currentIcon = this.randomIcon();
        }
        $(".main-icon i").addClass(this.currentIcon);
    }

    ngOnInit() {
        this.setIcon();

        $("body").removeClass("blue");
    }
}