import {
    styles
} from "HUDStyles.js";
import {
    iconSVG,
    noSVG
} from "svgs.js";
import * as event from "HUDeventlistener.js";

/** @param {NS} ns **/
export async function main(ns) {


    let contMain = "HUDChanger"

    if (document.getElementById(contMain)) {
        document.getElementById(contMain).remove();
        document.getElementById("HUDChanger-style").remove();
    }

    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.setAttribute("id", "HUDChanger-style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    (function container() {
        let doc = document.createElement("div");
        doc.setAttribute("id", contMain);
        const currentDiv = document.getElementById(contMain);
        document.body.insertBefore(doc, currentDiv);
    })();

    let HUDCont = document.getElementById(contMain);

    HUDCont.innerHTML += `<div id="subCont"><div id="main-svgCont">${iconSVG}</div></div>`;
    HUDCont.style.width = window.innerWidth;
    HUDCont.style.height = window.innerHeight;

    event.eventlistener();
}