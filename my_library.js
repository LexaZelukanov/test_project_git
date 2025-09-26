class Library{
    constructor(libTitle) {
        this.name = libTitle;
        this.books = [];
        this.totalBooks = 0; //Общее кол во 
        this.borrowedBooks = 0; // Кол-во выданных
    }

    // Добавление новой книги. Если 'isbn' уже есть в базе
    // То увеличим кол - во книг (в поле quantite)
    addBook(title, author, year, isbn, quantity = 1){
        const newBook = {
            title: title,
            author: author,
            year: year,
            isbn: isbn,
            totalQuantity: quantity, // Кол-во экземпляров
            avilableQuantity: quantity, // кол-во доступных для выдачи
            borrowedBy: [] // Кому выдавали и когда 
        }
        const findBook = this.books.filter(book => book.isbn == isbn);
        if (findBook.length){
            for (var i =0; i<= this.books.length; i++) {
                if (book in this.books[i] == findBook[0]) {
                this.books[i]. totalQuantity += quantity;
                this.books[i]. avilableQuantity += quantity;
                }
            }
        } else{
            this.books.push(newBook)
        }
        return newBook;
    }

    // Поиск книг
    findBook(searchTerm){
        let foundBooks = this.books.filter(book => book.title.includes(searchTerm));
        if (foundBooks.length) {
            return foundBooks;
        } else {
            foundBooks = this.books.filter(book => book.author.includes(searchTerm))
            if (foundBooks.length) {
                return foundBooks;
            } else {
                foundBooks = this.books.filter(book => book.isbn == searchTerm);
                return foundBooks;
            }
        }
    }
}

const library = new Library("Тестовая библиотека")


// Добавление книг
library.addBook("Преступление и наказание", "Федор Достоевский", 1866, "978-5-12345-678-9", 3);
library.addBook("Мастер и Маргарита", "Михаил Булгаков", 1967, "978-5-12345-679-6", 2);
console.log(library.books);

// ищем книги
const foundBooks = library.findBook("JavaScript");
console.log(foundBooks.length);
