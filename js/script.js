onTariffClick = (event) => {
    const but = event.target.parentElement;
    const list = but.nextElementSibling;
    try {
        list.classList.add('show');
    } catch (err) {
        event.target.nextElementSibling.classList.add('show');
    }
}

onTariffItemClick = (event) => {

    const text = event.target.textContent;

    const list = event.target.parentElement;
    list.classList.remove('show');

    const chooser = list.previousElementSibling;
    chooser.firstElementChild.textContent = text;

    const parent = chooser.parentElement.parentElement;
    const parentId = parent.id;

    const showList = parent.querySelector('.col1').querySelectorAll('.show');
    showList.forEach(function(item) {
        item.classList.remove('show');
    });

    switch (text) {
        case '1 месяц':
            parent.querySelector('.month1').classList.add('show')
            break;
        case '3 месяца':
            parent.querySelector('.month3').classList.add('show')
            break;
        case '9 месяцев':
            parent.querySelector('.month9').classList.add('show')
            break;
    }

}