const telInput = document.querySelectorAll('input[type="tel"]');

for (const i = 0; i < telInput.length; i++) {
    telInput[i].oninput = function () {
        dpcm(this);
    }
}

function dpcm(input) {
    var value = input.value;
    var re = /[^0-9\-\(\)\+\ ]/gi;
    if (re.test(value)) {
        value = value.replace(re, '');
        input.value = value;
    }
}