'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $burgers = getAll('.navbar-burger');

  if ($burgers.length > 0) {
    $burgers.forEach(($el) => {
      if (!$el.dataset.target) {
        return;
      }

      // Add a click event on each of them
      $el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        let target = $el.dataset.target;
        let $target = document.getElementById(target);
        // Toggle the "toggle-active" class on both the "navbar-burger" and the "navbar menu"
        $el.classList.toggle('toggle-active');
        $target.classList.toggle('toggle-active');
      });
    });
  }

  // Utils
  function getAll(selector) {
    let parent =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : document;

    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }
});
