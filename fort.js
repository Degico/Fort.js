function cback(e) {
    var t = [];
    for (var n = inputs.length; n--;) {
        if (!inputs[n].value.length) t.push(inputs[n]);
    }
    var r = t.length;
    var i = inputs.length;
    var s = document.querySelectorAll(".top");
    for (var o = s.length; o--;) {
        s[o].style.width = 100 - r / i * 100 + "%";
    }
}
var forms = document.querySelectorAll(".form"),
    inputs = [];
for (var i = forms.length; i--;) {
    var els = forms[i].querySelectorAll("input, textarea, select");
    for (var j = els.length; j--;) {
        if (els[j].type != "button" && els[j].type != "submit") {
            inputs.push(els[j]);
            els[j].addEventListener("input", cback, false);
        }
    }
}
