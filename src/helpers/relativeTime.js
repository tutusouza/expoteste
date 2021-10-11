import dayjs from 'dayjs';
export default function relativeTime(date) {
    // Make a fuzzy time
    date = new Date(dayjs(date)).getTime();
    var delta = Math.round((+new Date() - date) / 1000);

    var minute = 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;

    var fuzzy;

    if (delta < 30) {
        fuzzy = 'agora mesmo.';
    } else if (delta < minute) {
        fuzzy = 'a ' + delta + 'segundos atrás.';
    } else if (delta < 2 * minute) {
        fuzzy = 'a um minuto atrás.';
    } else if (delta < hour) {
        fuzzy = 'a ' + Math.floor(delta / minute) + ' minutos atrás.';
    } else if (Math.floor(delta / hour) == 1) {
        fuzzy = '1 hora atrás.';
    } else if (delta < day) {
        fuzzy = 'a ' + Math.floor(delta / hour) + ' horas atrás.';
    } else if (delta < day * 2) {
        fuzzy = 'ontem';
    } else if (delta < day * 3) {
        fuzzy = 'antes de ontem';
    } else {
        fuzzy = dayjs(date).format('DD/MM/YYYY');
    }

    return fuzzy;
}
