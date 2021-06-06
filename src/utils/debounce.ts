let timer: any;

// export const debounce = (func: Function, timeout = 500) => {
//   if (!timer) {
//     func.apply(this);
//   }
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     timer = undefined;
//   }, timeout);
// };

export const debounce = (
  func: Function,
  wait: number = 500,
  immediate?: boolean
) => {
  let context: any = this;

  var later = function () {
    timer = null;
    if (!immediate) func.apply(context);
  };

  let callNow = immediate && !timer;

  clearTimeout(timer);

  timer = setTimeout(later, wait);

  if (callNow) func.apply(context);
};
