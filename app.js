const button = document.querySelector("button");

const audioBoom = document.getElementById("audioBoom");
const audioClap = document.getElementById("audioClap");
const audioHihat = document.getElementById("audioHihat");
const audioKick = document.getElementById("audioKick");
const audioOpenHat = document.getElementById("audioOpenHat");
const audioRide = document.getElementById("audioRide");
const audioSnare = document.getElementById("audioSnare");
const audioTink = document.getElementById("audioTink");
const audioTom = document.getElementById("audioTom");

const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tibk = document.getElementById("tink");
const tom = document.getElementById("tom");

document.addEventListener("keypress", (event) => {
    if (event.key == "a") {
        audioBoom.src ="sounds/boom.wav";
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == "s") {
        audioClap.src ="sounds/clap.wav";
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == "d") {
        audioHihat.src ="sounds/hihat.wav";
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == "f") {
        audioKick.src ="sounds/kick.wav";
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == "g") {
        audioOpenHat.src ="sounds/openhat.wav";
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == "h") {
        audioRide.src ="sounds/ride.wav";
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == "j") {
        audioSnare.src ="sounds/snare.wav";
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == "k") {
        audioTink.src ="sounds/tink.wav";
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key == "l") {
        audioTom.src ="sounds/tom.wav";
    }
});