import React from 'react';

export default class Martetz extends React.Component {
    static checkBrowser(funcForDT, funcForMB){
        let phones = ['iPad', 'iPhone', 'Android', 'BlackBerry', 'iPod', 'Opera Mini', 'IEMobile', 'Mobile']
        let browser = navigator.userAgent;
        let mobileBrwsr = function (phones){
        let arr = [];
            phones.forEach(mob => {
                browser.match(mob) ? arr.push(true) : arr.push(false);  
            })
            return arr.includes(true);
        }
        !mobileBrwsr(phones) ? funcForDT() : funcForMB();
    }

    static checkBrowserReact(){
        let phones = ['iPad', 'iPhone', 'Android', 'BlackBerry', 'iPod', 'Opera Mini', 'IEMobile', 'Mobile']
        let browser = navigator.userAgent;
        let mobileBrwsr = function (phones){
        let arr = [];
            phones.forEach(mob => {
                browser.match(mob) ? arr.push(true) : arr.push(false);  
            })
            return arr.includes(true);
        }

        return mobileBrwsr(phones) ? true : false;
    } 
}
