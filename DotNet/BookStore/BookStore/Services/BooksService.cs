using BookStore.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;


namespace BookStore.Services
{
    public class BooksService
    {
        private readonly IMongoCollection<Book> _booksCollection;

        public BooksService(IOptions<BookStoreDatabaseSettings> bookStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(bookStoreDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(bookStoreDatabaseSettings.Value.DatabaseName);
            _booksCollection = mongoDatabase.GetCollection<Book>(bookStoreDatabaseSettings.Value.BooksCollectionName);
        }
        // get all books
        public async Task<List<Book>> GetAsync() =>
            await _booksCollection.Find(_ => true).ToListAsync();
        // get book by id
        public async Task<Book?> GetAsync(string id) => 
            await _booksCollection.Find(x => x.id == id).FirstOrDefaultAsync();

        // add a new book
        public async Task CreateAsync(Book newBook) =>
            await _booksCollection.InsertOneAsync(newBook);

        // update or replace a book
        public async Task UpdateAsync(string id, Book updatedBook) =>
             await _booksCollection.ReplaceOneAsync(x => x.id == id, updatedBook);

        // delete a book 
        public async Task RemoveAsync(string id) =>
            await _booksCollection.DeleteOneAsync(x => x.id == id);


    }
}
