import '../Style/BookCard.css'

function BookCard({ book, addToCart }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} />
      <h3>{book.name}</h3>
      <p>বিষয়: {book.subject}</p>
      <p>বোর্ড/শ্রেণি: {book.board} / {book.class}</p>
      <p className="price">৳{book.price}</p>
      <button onClick={() => addToCart(book)}>কার্টে যোগ করুন</button>
    </div>
  );
}

export default BookCard;