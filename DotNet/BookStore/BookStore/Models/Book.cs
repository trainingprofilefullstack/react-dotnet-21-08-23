using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BookStore.Models


{
    public class Book
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)] // primary Key
        public string? id { get; set; }

        [BsonElement("Name")]
        public string BookName { get; set; } = null!;

        public decimal Price { get; set; }

        public string Category { get; set; } = null!;

        public string Author { get; set; } = null!;

        public string newfield { get; set; } = null!;
    }
}
