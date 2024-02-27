(function (window, document, undefined) {

    'use strict';

    var navTrigger = document.querySelector('.nav-trigger');

    navTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('is-active');
    }, false);

})(window, document);


$(function () {
    $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy"
        , duration: "fast"
    });
});

function myFunction() {
    document.getElementById("demo").innerHTML = "Seccess";
}

function myFunction() {
    var a = document.getElementById('s3btn1')
    var b = document.getElementById('s3btn2')
    var x = document.getElementById("s4input1");
    var y = document.getElementById("s4input2");
    if (y.style.display === "block") {
        y.style.display = "none";
        x.style.display = "block";
        if (x.style.display === 'block') {
            x.style.display = 'flex';
        } else {
            x.style.display = 'block';
        }
    } else {
        y.style.display = "block";
        x.style.display = "none";
    }
}
