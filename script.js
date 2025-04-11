document.addEventListener('click', (e) => {
  document.querySelectorAll('.select__dropdown').forEach(dropdown => {
    const parent = dropdown.closest('.select');
    if (!parent.contains(e.target)) {
      dropdown.classList.remove('select__dropdown--active');
    }
  });

  const select = e.target.closest('.select');
  if (select) {
    const dropdown = select.querySelector('.select__dropdown');
    const button = select.querySelector('.select__button');
    const isActive = dropdown.classList.contains('select__dropdown--active');
    dropdown.classList.toggle('select__dropdown--active', !isActive);

    if (e.target.classList.contains('select__option')) {
      const value = e.target.dataset.value;
      button.textContent = e.target.textContent;
      button.setAttribute('data-selected', value); 
      dropdown.classList.remove('select__dropdown--active');
    }
  }
});

