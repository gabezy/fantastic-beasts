export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-ouside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOustidClick);
      });
    });
    element.setAttribute(outside, "");
  }

  function handleOustidClick(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOustidClick);
      });
      element.removeAttribute(outside);
      callback();
    }
  }
}
