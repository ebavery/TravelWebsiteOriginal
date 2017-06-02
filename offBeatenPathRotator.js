/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var specolaImg = new Image();
specolaImg.src = "images/la_specola.JPG";
var innocentiImg = new Image();
innocentiImg.src = "images/innocenti.jpg";
var stibbertImg = new Image();
stibbertImg.src = "images/stibbert.JPG";
var galileoImg = new Image();
galileoImg.src = "images/galileo.jpg";
var novecentoImg = new Image();
novecentoImg.src = "images/20thc.jpg";
var pietroImg = new Image();
pietroImg.src = "images/mosaic.jpg";

function offBeatenPathItem(img, follow, link, teaser){       
    this.img = img;
    this.follow = follow;
    this.link = link;
    this.teaser = teaser;
    this.write = function (){
        return '<p><img src="' + this.img + '"/></p><h3><a href="' + this.link + '" target="_blank">' + this.follow + '</a></h3>' +
                '<p>' + this.teaser + '</p>';   
    };
}

var itemArray = new Array();
itemArray[0] = new offBeatenPathItem(specolaImg.src, "La Specola Natural History Museum", "http://www.msn.unifi.it/en/", "Unusual anatomical wax models at the oldest public museum in Europe (Oltrarno area)");
itemArray[1] = new offBeatenPathItem(innocentiImg.src, "Innocents Museum", "http://www.turismo.intoscana.it/site/en/highlights/MUDI-The-Museum-of-the-Innocents-in-Florence/", "Renaissance art in a historic charitable institute (S.Marco area)");
itemArray[2] = new offBeatenPathItem(stibbertImg.src, "Stibbert Museum", "http://www.museostibbert.it/en", "Quirky house museum with a large armor collection (North of S.Marco)");
itemArray[3] = new offBeatenPathItem(galileoImg.src, "Galileo Museum", "http://www.museogalileo.it/en/visit.html", "Galileo's telescopes and scientific instruments (Signoria area)");
itemArray[4] = new offBeatenPathItem(novecentoImg.src, "20th Century Museum", "http://www.museonovecento.it/en/museo/", "Italian art of the 20th Century (S.M.Novella area)");
itemArray[5] = new offBeatenPathItem(pietroImg.src, "Workshop of Semiprecious Stones", "http://www.opificiodellepietredure.it/index.php?it/73/il-museo", "A working restoration studio and museum of the craft of stone inlay  (S.Marco area)");

var nIndex = 0;
var timerID;
var len = itemArray.length;

function rotateNews(){
    if (nIndex >= len)
        nIndex = 0;
    document.getElementById("offBeaten").innerHTML = itemArray[nIndex].write();
    nIndex++;
    timerID = setTimeout('rotateNews()', 5000);  
}

function pauseNews(){
    if (timerID != null){
        clearTimeout(timerID);
        timerID = null;
    }
}
function playNews(){
    if (timerID == null){
        timerID = setTimeout('rotateNews()', 5000);
    }
}
