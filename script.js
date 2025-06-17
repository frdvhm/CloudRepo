/*
 * Efek ketik (type‑writer) sederhana
 * Tulisan muncul huruf demi huruf pada elemen h1#title
 */

const text =
    "Hello from 22523153 – Ferdiansyah Vahmi Ilmawan!";
const speed = 60; // ms per karakter

const target = document.getElementById("title");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Mulai animasi setelah DOM siap
document.addEventListener("DOMContentLoaded", typeWriter);
