document.addEventListener('DOMContentLoaded', function () {
    // конечная дата, например 1 июля 2021
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    // id таймера
    let timerId = null;
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $days.dataset.title = 'Дней';
        $hours.dataset.title = 'Часов';
        $minutes.dataset.title = 'Минут';
        $seconds.dataset.title = 'Секунд';
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
});


$(document).ready(function () {
    $('#su').click(function () {
        $(this).attr('disabled', true); // Либо добавить атрибут disabled 
    });

    $('#sub').click(function () {
        $(this).hide(); // Либо скрыть
    });
});