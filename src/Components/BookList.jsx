import { useState } from "react";
import React from "react";
import BookCard from "./BookCard";
import '../Style/BookList.css'

function BookList({ books, addToCart }) {
  const [filters, setFilters] = React.useState({
    class: "",
    board: "",
    subject: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredBooks = books ? books.filter((book) => {
    return (
      (!filters.class || book.class === filters.class) &&
      (!filters.board || book.board === filters.board) &&
      (!filters.subject || book.subject === filters.subject)
    );
  }) : [];

  return (
    <div className="book-list-container">
      <div className="filters">
        <h2>ফিল্টার</h2>
        <div>
          <label>শ্রেণি</label>
          <select name="class" onChange={handleFilterChange}>
            <option value="">সকল শ্রেণি</option>
            <option value="HSC">HSC</option>
            <option value="Honours">Honours</option>
          </select>
        </div>
        <div>
          <label>বোর্ড</label>
          <select name="board" onChange={handleFilterChange}>
            <option value="">সকল বোর্ড</option>
            <option value="Dhaka">ঢাকা</option>
            <option value="Chittagong">চট্টগ্রাম</option>
          </select>
        </div>
        <div>
          <label>বিষয়</label>
          <select name="subject" onChange={handleFilterChange}>
            <option value="">সকল বিষয়</option>
            <option value="Physics">পদার্থবিজ্ঞান</option>
            <option value="Chemistry">রসায়ন</option>
            <option value="Mathematics">গণিত</option>
          </select>
        </div>
      </div>
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} addToCart={addToCart} />
          ))
        ) : (
          <p className="no-books">কোনো বই পাওয়া যায়নি।</p>
        )}
      </div>
    </div>
  );
}

export default BookList;