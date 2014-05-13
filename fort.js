var forms  = document.querySelectorAll('.form'),
    inputs = [];

for (var i = forms.length; i--;) {
    var els = forms[i].querySelectorAll('input, textarea, select');

    for (var j = els.length; j--;) {
        if (els[j].type != 'button' && els[j].type != 'submit') {
            inputs.push(els[j]);
            els[j].addEventListener('input', cback, false);
        }
    }
}
function cback(event) {
    var b = [];

    for (var i=inputs.length; i--;) {
        if ( ! inputs[i].value.length ) b.push(inputs[i]);
    }

    var l1  = b.length;
    var l2  = inputs.length;
    var top = document.querySelectorAll('.top');

    for (var j=top.length; j--;) {
        top[j].style.width = 100 - (l1 / l2) * 100 + "%";
    }
}
