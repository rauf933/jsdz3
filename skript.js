let a = +prompt('Введите время');
if ((a >= 6) && (a <= 12)) {
    alert(a + ' часа утра')
}
else if ((a >= 13) && (a <= 18)) {
    alert(a + ' часа дня')
}
else if ((a >= 19) && (a <= 24)) {
    alert(a + ' часа вечера')
}
else if ((a >= 0) && (a <= 5)) {
    alert(a + ' часа ночи')
}