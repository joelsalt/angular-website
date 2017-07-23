"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GmailService = (function () {
    function GmailService() {
        this.clientId = "813472970423-g05nuf2v99mctgqh0i35sp762ks2bc0u.apps.googleusercontent.com";
        this.apiKey = "6oY1b8WmkqVdc1nB-JJ4R_Hz";
        this.scopes = "https://www.googleapis.com/auth/gmail.readonly" + "https://www.googleapis.com/auth/gmail.send";
    }
    return GmailService;
}());
GmailService = __decorate([
    core_1.Injectable()
], GmailService);
exports.GmailService = GmailService;
//# sourceMappingURL=gmail.service.js.map