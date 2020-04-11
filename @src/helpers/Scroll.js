
export function scrollToElementId (elementId) {
  window.scroll({
    top: document.getElementById(elementId).offsetTop,
    left: 0,
    behavior: 'smooth'
  });
};
