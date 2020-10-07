
export function scrollToElementId (rootId, elementId) {
  document.getElementById(rootId).scroll({
    top: document.getElementById(elementId).offsetTop,
    left: 0,
    behavior: 'smooth'
  });
};
