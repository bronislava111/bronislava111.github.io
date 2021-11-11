function getObj(objID) {
    if (document.getElementById) { return document.getElementById(objID); }
    else if (document.all) { return document.all[objID]; }
    else if (document.layers) { return document.layers[objID]; }
}

var ie4 = document.all
var ns6 = document.getElementById && !document.all
cobj = getObj("button1");

function moveIt() {
    y = Math.floor(Math.random() * 20);
    x = Math.floor(Math.random() * 20);
    if (ie4) {
        cobj.style.top = y;
        cobj.style.left = x;
    }
    else if (ns6) {
        cobj.style.top = y + "px";
        cobj.style.left = x + "px";
    }
}

/*s
var bgColor1 = { r: 0, g: 0, b: 0, a: 0 }//Из какого цвета
var bgColor2 = { r: 255, g: 99, b: 71, a: 0.8 }//В какой цвет


window.onload = function () {
    window.dispatchEvent(new Event("scroll"));
}
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - innerHeight;//Получаем высоту видимой части окна
    var percent = scrollTop / scrollHeight;
    var color = { r: 0, g: 0, b: 0, a: 0 };
  

    var tmp = Math.abs(bgColor1.r - bgColor2.r) * percent;
    color.r = Math.ceil(bgColor1.r > bgColor2.r ? bgColor1.r - tmp : bgColor1.r + tmp);


    tmp = Math.abs(bgColor1.g - bgColor2.g) * percent;
    color.g = Math.ceil(bgColor1.g > bgColor2.g ? bgColor1.g - tmp : bgColor1.g + tmp);

    tmp = Math.abs(bgColor1.b - bgColor2.b) * percent;
    color.b = Math.ceil(bgColor1.b > bgColor2.b ? bgColor1.b - tmp : bgColor1.b + tmp);

    tmp = Math.abs(bgColor1.a - bgColor2.a) * percent;
    color.a = Math.ceil(bgColor1.a > bgColor2.a ? bgColor1.a - tmp : bgColor1.a + tmp);


    


    document.getElementById("menu").style.background = "rgba(" + color.r + "," + color.g + "," + color.b + " ," + color.a + ")";

});*/

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("menu").style.padding = "10px 0px";
        document.getElementById("menu").style.background = "rgb(245,245,245)";
        document.getElementById("menu").style.transition = "1s";
       
        
       
    }
     if  (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("menu").style.padding = "10px 0px";
        document.getElementById("menu").style.background = "black";
         document.getElementById("menu").style.transition = "1s";
         document.getElementById("none").style.display = "inline-block";
       


    }
    else {
        document.getElementById("menu").style.padding = "30px";
         document.getElementById("menu").style.background = "rgba(0,0,0,0)";
         document.getElementById("none").style.display = "none";
      
    }
    
};



function replace(Type) {
    document.getElementById("div1").style.display = (Type) ? "block" : 'none';
    document.getElementById("div2").style.display = (Type) ? "none" : "block";
};

function replaceone(Type) {
    document.getElementById("div3").style.display = (Type) ? "block" : 'none';
    document.getElementById("div4").style.display = (Type) ? "none" : "block";
};

function replacetwo(Type) {
    document.getElementById("div5").style.display = (Type) ? "block" : 'none';
    document.getElementById("div6").style.display = (Type) ? "none" : "block";
};

function replacefour(Type) {
    document.getElementById("div7").style.display = (Type) ? "block" : 'none';
    document.getElementById("div8").style.display = (Type) ? "none" : "block";
};

function replace_retronslator(Type) {
    document.getElementById("div_retronslator").style.display = (Type) ? "block" : 'none';
    document.getElementById("div_retronslator_one").style.display = (Type) ? "none" : "block";
};
function replace_retronslator_one(Type) {
    document.getElementById("div_retronslator_two").style.display = (Type) ? "block" : 'none';
    document.getElementById("div_retronslator_three").style.display = (Type) ? "none" : "block";
};

function replace_sirena(Type) {
    document.getElementById("div_sirena").style.display = (Type) ? "block" : 'none';
    document.getElementById("div_sirena_one").style.display = (Type) ? "none" : "block";
};


function replace_sirena_two(Type) {
    document.getElementById("div_sirena_three").style.display = (Type) ? "block" : 'none';
    document.getElementById("div_sirena_four").style.display = (Type) ? "none" : "block";
};


