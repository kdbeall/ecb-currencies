#!/usr/bin/env node

function fetchRates(){
    let xhr = new XMLHttpRequest()
    xhr.onload = function() {
        dump(xhr.responseXML.documentElement.nodeName);
      }
      xhr.onerror = function() {
        dump("Error while getting XML.");
      }
    xhr.open("GET", "example.xml");
    xhr.responseType = "document";
    xhr.send();
    return null
}

function ratesToJson(){
    return null
}