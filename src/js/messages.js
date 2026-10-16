import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const COMMON_PROPS = {
  class: 'message',
  titleSize: '16px',
  titleLineHeight: '150%',
  messageSize: '16px',
  messageLineHeight: '150%',
  theme: 'dark',
  position: 'topRight',
  maxWidth: '432px',
};

export const showError = message => {
  iziToast.error({
    ...COMMON_PROPS,
    title: '',
    message: message,
    backgroundColor: '#ef4040',
  });
};

export const showInfo = message => {
  iziToast.info({
    ...COMMON_PROPS,
    title: '',
    message: message,
    backgroundColor: '#3498db',
  });
};