const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

window.addEventListener('load', () => {
  let portfolioContainer = select('#portfolio-grid');
  if (portfolioContainer) {

    let portfolioFilters = select('#filters a', true);

    on('click', '#filters a', function(e) {
      e.preventDefault();
      portfolioFilters.forEach(function(el) {
        el.classList.remove('active');
      });
      this.classList.add('active');

      const filterGroup = this.getAttribute('data-filter');
      const items = select('#portfolio-grid .item', true);
      items.forEach(item => {
        ((filterGroup === "*") || item.classList.contains(filterGroup)) ? $(item).fadeIn() : $(item).fadeOut(); 
        // item.classList.remove('invisible') : item.classList.add('invisible');
      });

    }, true);
  }

});