document.getElementById('name').addEventListener('input', function () {
    this.value = this.value.replace(/[^-+ 0-9 А-ЯЁ]+/ig, '');
});