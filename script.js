let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


myLibrary.push(new Book('Hoobit', 'Tolkien', 301, false));

function addBookToLibrary() {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').value

    myLibrary.push(new Book(title, author, pages, read));
    displayBooks(myLibrary);
    displayForm()
}


function removeBookFromLibrary() {
    document.querySelectorAll('.close').forEach((closeBtn) => {
        closeBtn.addEventListener('click', (e) => {
            console.log(e)
        })
    })
}


//Listening for click on 'read' button and changing its appearance depending on if it's read or not.
const checkRead = () => {
    document.querySelectorAll('.read').forEach((read) => {
        read.addEventListener('click', () => {
            read.classList.toggle('read-true');
            read.classList.toggle('read-false');
            if (read.classList.contains('read-true')) {
                read.textContent = 'Read';
            }
            if (read.classList.contains('read-false')) {
                read.textContent = 'Not-read';
            }
        })
    })
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
    container.innerHTML += '<span class="add-book" onclick="displayForm()">+ Add book</span>';
    checkRead();
    //adding unique id's for every book in myLibrary array
    for (let book in myLibrary) {
        myLibrary[book].id = book;
    }

    removeBookFromLibrary()
}

const displayForm = () => {
    document.querySelector('.form').classList.toggle('invisible');
}

displayBooks(myLibrary);

document.querySelector('.send-form').addEventListener('click', addBookToLibrary);


