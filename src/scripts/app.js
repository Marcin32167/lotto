const btnPlayRef = document.querySelector('#playBtn');
const inputRefs = [...document.querySelectorAll('input[id^="digit"]')];

const isAllNotEmpty = (nodes) => nodes.every((node) => node.value.trim() !== '');
const isIntegers = (nodes) => nodes.every((node) => Number.isInteger(Number(node.value)));
const convertToIntegers = (nodes) => nodes.map((node) => parseInt(node.value));
const isInRange = (digits) => digits.every((digit) => digit >= 1 && digit <= 49);
const isNotRedudant = (digits) => new Set(digits).size === digits.length;

btnPlayRef.addEventListener('click', function (event) {
    if (isAllNotEmpty(inputRefs)) {
        if (isIntegers(inputRefs)) {
            const userDigits = convertToIntegers(inputRefs);
            if (isInRange(userDigits)) {
                if (isNotRedudant(userDigits)) {

                } else {
                    console.log('liczby Ci się potwarzają ziomeczku');
                }
            } else {
                console.log('są liczby poza zakresem 1-49');
            }
        } else {
            console.log('liczby nie są liczbami całkowitymi');
        }
    } else {
        console.log('coś jest puste');
    }
});
