import { useState } from "react";

export default function BookPicker({ books }) {

    const [filters, setFilters] = useState({
        author: "",
        title: "",
        country: "",
        language: "",
        year: ""
    });

    const inputHandler = (type, value) => {
        setFilters({
            ...filters,
            [type]: value.trim().toLowerCase()
        });
    };

    const filterHandler = (book) => {
        const { author, title, country, language, year } = filters;

        if (year) {
            const yearNum = parseInt(year, 10);
            if (isNaN(yearNum) || book.year !== yearNum) return false;
        }

        return (
            book.author.toLowerCase().includes(author) &&
            book.title.toLowerCase().includes(title) &&
            book.country.toLowerCase().includes(country) &&
            book.language.toLowerCase().includes(language)
        );
    };

    const filteredBooks = books.filter(filterHandler);

    return (
        <>
            <input type="text" name="fooz" />
            <div className="input-container">
                <div className="input-line">
                    <label htmlFor="author">author</label>
                    <input onChange={(e) => inputHandler("author", e.target.value)} type="text" name="author" id="author" />
                </div>
                <div className="input-line">
                    <label htmlFor="title">title</label>
                    <input onChange={(e) => inputHandler("title", e.target.value)} type="text" name="title" id="title" />
                </div>
                <div className="input-line">
                    <label htmlFor="country">country</label>
                    <input onChange={(e) => inputHandler("country", e.target.value)} type="text" name="country" id="country" />
                </div>
                <div className="input-line">
                    <label htmlFor="language">language</label>
                    <input onChange={(e) => inputHandler("language", e.target.value)} type="text" name="language" id="language" />
                </div>
                <div className="input-line">
                    <label htmlFor="year">year</label>
                    <input onChange={(e) => inputHandler("year", e.target.value)} type="text" name="year" id="year" />
                </div>
            </div>
            <ul>
                {
                    filteredBooks.map((book, i) => (
                        <li key={i}>
                            <div className="result-line">
                                <span>author</span><span>{book.author}</span>
                            </div>
                            <div className="result-line">
                                <span>title</span><span>{book.title}</span>
                            </div>
                            <div className="result-line">
                                <span>country</span><span>{book.country}</span>
                            </div>
                            <div className="result-line">
                                <span>language</span><span>{book.language}</span>
                            </div>
                            <div className="result-line">
                                <span>year</span><span>{book.year}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}