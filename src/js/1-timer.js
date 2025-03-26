import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const setDateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const timerFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let selectedDate = null;
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        color: '#B51B1B',
        position: 'topRight',
      });
      btnStart.disabled = true;
    } else {
      selectedDate = selectedDates[0];
      btnStart.disabled = false;
    }
  },
};

flatpickr(setDateTime, options);
// ------------------------------------

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
//?-----------------------------

let timerId = null;

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  setDateTime.disabled = true;

  timerId = setInterval(() => {
    const timer = selectedDate - new Date();

    if (timer <= 0) {
      clearInterval(timerId);
      iziToast.success({
        title: 'Done!',
        message: 'Timer finished!',
      });
      setDateTime.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timer);
    timerFields.days.textContent = addLeadingZero(days);
    timerFields.hours.textContent = addLeadingZero(hours);
    timerFields.minutes.textContent = addLeadingZero(minutes);
    timerFields.seconds.textContent = addLeadingZero(seconds);
  }, 1000);
});
