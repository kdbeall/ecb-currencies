#!/usr/bin/env node

function testFetch(){
    let xhr = new XMLHttpRequest()
    xhr.onload = function() {
        dump(xhr.responseXML.documentElement.nodeName);
      }
      xhr.onerror = function() {
        dump("Error while getting XML.");
      }
    return null
}

function testRatesToJson(){
    return null
}