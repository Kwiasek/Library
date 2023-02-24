let myLibrary = [
    {
        title: 'Inny świat',
        author: 'Gustaw Herling-Grudziński',
        pages: 301 + ' pages',
        read: false
    },
    {
        title: 'Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 297 + ' pages',
        read: true
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').value

    myLibrary.push(new Book(title, author, pages, read));
    displayBooks(myLibrary);
    displayForm()
}

function removeBookFromLibrary(book) {
    
}

const displayBooks = (myLibrary) => {
    let result = '';
    const container = document.querySelector('main');
    myLibrary.map(book => result += `
    <div class="card">
        <button class="close">X</button>
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
        <p class="pages">${book.pages}</p>
        <button class="read read-${book.read}">${book.read == true ? 'Read' : 'Not-read'}</button>
    </div>
    `)
    container.innerHTML = result;
    container.innerHTML += '<span class="add-book" onclick="displayForm()">+ Add book</span>'
}

const displayForm = () => {
    document.querySelector('.form').classList.toggle('invisible');
}

displayBooks(myLibrary);

document.querySelector('.send-form').addEventListener('click', addBookToLibrary);
