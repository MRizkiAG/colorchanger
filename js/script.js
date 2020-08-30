const body = document.querySelector("body");

const sliderMerah = document.querySelector("input[name=sliderMerah]");
const sliderHijau = document.querySelector("input[name=sliderHijau]");
const sliderBiru = document.querySelector("input[name=sliderBiru]");

const valueR = document.querySelector(".valueR");
const valueG = document.querySelector(".valueG");
const valueB = document.querySelector(".valueB");

const warnaMerah = document.querySelector(".merah");
const warnaHijau = document.querySelector(".hijau");
const warnaBiru = document.querySelector(".biru");


sliderMerah.addEventListener('change', function () {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    valueR.innerHTML = (sliderMerah.value);
    body.style.backgroundColor = ("rgb(" + r + "," + g + "," + b + ")")
    warnaMerah.style.backgroundColor = ("rgb(" + r + ",0,0)")
});

sliderHijau.addEventListener('change', function () {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    valueG.innerHTML = (sliderHijau.value);
    body.style.backgroundColor = ("rgb(" + r + "," + g + "," + b + ")")
    warnaHijau.style.backgroundColor = ("rgb(0," + g + ",0)")
});

sliderBiru.addEventListener('change', function () {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    valueB.innerHTML = (sliderBiru.value);
    body.style.backgroundColor = ("rgb(" + r + "," + g + "," + b + ")")
    warnaBiru.style.backgroundColor = ("rgb(0,0," + b + ")")
});


function copyWarnaRGB() {
    document.getElementById("copy").select();
    document.execCommand("copy");
    alert("Text berhasil dicopy");
}