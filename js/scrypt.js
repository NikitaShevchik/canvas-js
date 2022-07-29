"use strict"

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function bird() {
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(100, 150);
    ctx.lineTo(150, 100);
    ctx.lineTo(50, 100);
    ctx.stroke();
}

// Нарисуем квадратик

function sqr() {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 150);
    ctx.lineTo(150, 150);
    ctx.lineTo(150, 50);
    // ctx.lineTo(50, 50);
    ctx.closePath(); // автоматически закроет квадратик
    ctx.fill() // заполняет цветом
    // ctx.stroke(); // делает контур
}

function practice() {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(100, 100);
    ctx.moveTo(50, 100);
    ctx.lineTo(100, 50);
    ctx.stroke(); // делает контур
}

function practice2() {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 100);
    ctx.lineTo(100, 100);
    ctx.lineTo(100, 50);
    ctx.closePath()
    ctx.stroke(); // делает контур
}

function practice3() {
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(100, 70);
    ctx.lineTo(150, 100);
    ctx.closePath()
    ctx.stroke(); // делает контур
}

function practice4() {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(130, 30);
    ctx.moveTo(150, 50);
    ctx.lineTo(130, 70);
    ctx.stroke(); // делает контур
}

function practice5() {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 150);
    ctx.lineTo(50, 150);
    ctx.closePath()
    ctx.fill()
}

function practice6() {
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(100, 50);
    ctx.lineTo(150, 150);
    ctx.closePath()
    ctx.fill()
}


// Рисование прямоугольников

// ctx.strokeRect(50, 50, 100, 100);

// ctx.fillRect(50, 50, 100, 100);

// ctx.rect(30, 50, 150, 80);
// ctx.stroke()
// ctx.fill()


// Метод clearRect - работает как стерка

// ctx.fillRect(50, 50, 100, 100);
// ctx.clearRect(70, 70, 50, 50);


// Рисование окружностей через canvas на JavaScript

function getRadians(degrees) {
    return (Math.PI / 180) * degrees;
}

ctx.arc(100, 100, 50, 0, getRadians(100));

ctx.fillStyle = 'green'; // Смена цвета линии в canvas на JavaScript
ctx.strokeStyle = 'red'
ctx.closePath()
ctx.stroke();
ctx.fill();
