
document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('[data-sort]').forEach((root) => {
    const btn = root.querySelector('.blog-filters__btn');
    const current = root.querySelector('.blog-sort__current');
    const list = root.querySelector('.blog-sort__list');
    const options = list.querySelectorAll('.blog-sort__option');

    const open = () => {
        list.hidden = false;
        root.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
        list.hidden = true;
        root.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', () => (list.hidden ? open() : close()));

    options.forEach((option) => {
        option.addEventListener('click', () => {
            options.forEach((o) => {
                o.closest('li').hidden = o === option; // выбранный прячем
            });
            current.textContent = option.textContent;
            close();

            // const value = option.dataset.value; // сортировка / запрос
        });
    });

    document.addEventListener('click', (e) => {
        if (!root.contains(e.target)) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
});
});