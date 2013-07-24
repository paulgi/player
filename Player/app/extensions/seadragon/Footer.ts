/// <reference path="../../../js/jquery.d.ts" />
import baseFooter = module("app/shared/FooterPanel");

export class Footer extends baseFooter.FooterPanel {

    constructor($element: JQuery) {
        super($element);
    }

    create(): void {
        super.create();
    }

    resize(): void {
        super.resize();
    }
}