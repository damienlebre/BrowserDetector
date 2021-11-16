

let userAgent = navigator.userAgent; //navigator->objet qui contient infos sur navigateur
//console.log(userAgent);//
let browser

if(userAgent.match(/edg/i)){
    browser = 'edge';
}else if(userAgent.match(/firefox|fxios/i)){
    browser= 'firefox';

} else if(userAgent.match(/chrome|chromium|vrios/i)){
    browser = 'chrome';

}else if(userAgent.match(/safari/i)){
    browser = 'safari';

}else{
    alert('la detection a échouée!!!');
}

console.log(browser);

const BROWSER = document.querySelector(`.${browser}`);
BROWSER.classList.add('isSelected');
