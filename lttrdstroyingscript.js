// ==UserScript==
// @name         I hate the letter E
// @namespace    http://tampermonkey.net/
// @version      6.9
// @description  I hate the letter E more than I've ever hated anything on the face of this earth, just merely mentioning the letter E fills me with an indescribable hatred of the letter. I've had a deep seated hatred for the letter E since childhood and now that it's finally time that it has come that I must mascare this god forsaken letter for I hate it so much.
// @author       Knuxfan the destroyer
// @match        *://*/*
// @grant        none
// ==/UserScript==


//this script is a joke btw
String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}
function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

function main(){
    var all = textNodesUnder(document.body);

    for (var i=0, max=all.length; i < max; i++) {
        if(all[i].textContent != undefined) {
            if(all[i].textContent.includes("e") || all[i].textContent.includes("E")) {
                  var str = all[i].textContent.replaceAll("e","");
                  str = str.replaceAll("E","");
                  all[i].textContent = str;
            }
        }
    }
}

main();
