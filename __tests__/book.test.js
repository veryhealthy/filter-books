import { expect, test, describe, afterEach } from "bun:test";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import BookPicker from "../src/BookPicker";

afterEach(cleanup);

describe("BookPicker", () => {

    const books = [
        { author: "Gabriel García Márquez", title: "One Hundred Years of Solitude", country: "Colombia", language: "Spanish", year: 1967 },
        { author: "Jane Austen", title: "Pride and Prejudice", country: "United Kingdom", language: "English", year: 1813 },
        { author: "Haruki Murakami", title: "Norwegian Wood", country: "Japan", language: "Japanese", year: 1987 }
    ];

    test("renders the book picker with some books", () => {
        render(<BookPicker books={books} />);
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(3);
    });

    test("filter one book by author", () => {
        render(<BookPicker books={books} />);
        const authorInput = screen.getByLabelText(/author/i);
        fireEvent.change(authorInput, { target: { value: "Jane Austen" } });
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(1);
        expect(screen.getByText("Pride and Prejudice")).toBeDefined();
    });

    test("filter one book by year", () => {
        render(<BookPicker books={books} />);
        fireEvent.change(screen.getByLabelText(/year/i), { target: { value: "1987" } });
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(1);
        expect(screen.getByText("Norwegian Wood")).toBeDefined();
    });

    test("invalid year filter shows no books", () => {
        render(<BookPicker books={books} />);
        fireEvent.change(screen.getByLabelText(/year/i), { target: { value: "abcd" } });
        expect(screen.queryByRole("listitem")).toBeNull();
    });
});
