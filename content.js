// content script
// changes every polish sign to the cyryllic version of it
// if the background script says so


console.log("Ex-cyrylize-tension is running");


// accesing the JSON regexp pol2cyr dict 

var xhr = new XMLHttpRequest;
xhr.open("GET", chrome.runtime.getURL("dict.json"));
xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
        console.log("External accesible JSON requested");
        window.json_text = xhr.responseText;
        Dict = JSON.parse(xhr.responseText);
        console.log("Parsing the json file, here it is:");
        console.dir(Dict);
    }
};
xhr.send();

var tags = ['p', 'h', 'span', 'a', 'dd', 'td']
// will be implemented in next version as choosing tags from the array



chrome.runtime.onMessage.addListener(gotMessage);



function cyrylize(string) {
    let rekey;
    let reval;

    re_dicts = Dict.items
    
    for (keyval of re_dicts) {
        
        Object.entries(keyval).forEach(
            ([key, val]) => {
                for (var i = 0; i < 3; i++) {
                    rekey = new RegExp(key, 'g');
                    reval = new RegExp(val);
                    
                    string = string.replace(rekey, val);
                }
            }
        );
    }

    return string;
}


function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
     if (message.txt === "cyrylize!") {

         console.log("Button clicked, procceding to cyrylize tab's text");
         
         let ps = document.getElementsByTagName("p");
         for(p of ps) {
             p.textContent = cyrylize(p.textContent);
         }
         let as = document.getElementsByTagName("a");
         for(a of as) {
             a.textContent = cyrylize(a.textContent);
         }
         for (var j = 1; j < 7; j++) {
             let hs = document.getElementsByTagName("h" + String(j));
             for (h of hs) {
                 h.textContent = cyrylize(h.textContent);
             }
         }
         let title = document.getElementsByTagName("title");
         for (t of title) {
             t.textContent = cyrylize(t.textContent);
         }
         let sps = document.getElementsByTagName("span");
         for (sp of sps) {
             sp.textContent = cyrylize(sp.textContent);
         }
         let tds = document.getElementsByTagName("td");
         for (td of tds) {
             td.textContent = cyrylize(td.textContent);
         }
         let dds = document.getElementsByTagName("dd");
         for (dd of dds) {
             dd.textContent = cyrylize(dd.textContent);
         }
     }
}


UTF8 = {
    encode: function(s){
        for(var c, i = -1, l = (s = s.split("")).length, o = String.fromCharCode; ++i < l;
            s[i] = (c = s[i].charCodeAt(0)) >= 127 ? o(0xc0 | (c >>> 6)) + o(0x80 | (c & 0x3f)) : s[i]
        );
        return s.join("");
    },
    decode: function(s){
        for(var a, b, i = -1, l = (s = s.split("")).length, o = String.fromCharCode, c = "charCodeAt"; ++i < l;
            ((a = s[i][c](0)) & 0x80) &&
            (s[i] = (a & 0xfc) == 0xc0 && ((b = s[i + 1][c](0)) & 0xc0) == 0x80 ?
            o(((a & 0x03) << 6) + (b & 0x3f)) : o(128), s[++i] = "")
        );
        return s.join("");
    }
};

