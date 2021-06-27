$(document).ready(function () {
//все HTML-элементы strong и окрасьте их в зеленый цвет
    $('strong').css('color', 'green');
//найдите все HTML-элементы em и добавьте им класс .selected
    $('em').addClass('selected');
//Найдите все элементы mark, которые находятся в div с классом row и задайте им класс .selected
    $(".row mark").addClass('selected');
//Найдите все гиперссылки и удалите у них подчеркивания
    $("a").css("text-decoration", "none");
//Найдите все HTML-элементы, который содержат слово «Задания» и находятся в элементе с классом .container
    $('.container :contains("Задания")');
//Переключите элементы strong с классом some в состояние без этого класса, а тем элементам (strong), у которых небыло этого класса — добавьте.
    $("strong").toggleClass("some");
//среди набора элементов с классом .row удалите класс у второго элемента
    $(".row:eq(1)").removeClass("row");
//прочитайте CSS-свойство color у второй гиперсылки в тексте
    alert($("a:eq(1)").css("color"));
});