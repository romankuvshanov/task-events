/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    const body = document.querySelector('body');
    button.innerHTML = 'Удали меня';
    button.addEventListener('click', (event) => {
        event.currentTarget.remove();
    });
    body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const uList = document.createElement('ul');
    const body = document.querySelector('body');
    for (let string of arr) {
        const liElement = document.createElement('li');
        liElement.innerHTML = string;
        liElement.addEventListener('mouseover', (event) => {
            // Вопрос: string - замыкание?
            event.currentTarget.setAttribute('title', string);
        });
        uList.append(liElement);
    }
    body.append(uList);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const body = document.querySelector('body');
    const aLink = document.createElement('a');
    aLink.innerHTML = 'tensor';
    aLink.setAttribute('href', 'https://tensor.ru/');
    aLink.addEventListener(
        'click',
        (event) => {
            aLink.innerHTML += ` ${aLink.getAttribute('href')}`;
            event.preventDefault();
        },
        { once: true },
    );
    body.append(aLink);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const body = document.querySelector('body');
    const uList = document.createElement('ul');
    uList.append(createLiElement());
    body.append(uList);

    const button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.addEventListener('click', () => {
        uList.append(createLiElement());
    });
    body.append(button);
}

function createLiElement() {
    const liElement = document.createElement('li');
    liElement.innerHTML = 'Пункт';
    liElement.addEventListener('click', (event) => {
        event.currentTarget.innerHTML += '!';
    });
    return liElement;
}
