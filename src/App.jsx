import "./App.css";
import BookPicker from "./BookPicker";

const App = () => {
    const books = [
        { author: "Gabriel García Márquez", title: "One Hundred Years of Solitude", country: "Colombia", language: "Spanish", year: 1967 },
        { author: "Jane Austen", title: "Pride and Prejudice", country: "United Kingdom", language: "English", year: 1813 },
        { author: "Haruki Murakami", title: "Norwegian Wood", country: "Japan", language: "Japanese", year: 1987 },
        { author: "Chinua Achebe", title: "Things Fall Apart", country: "Nigeria", language: "English", year: 1958 },
        { author: "Isabel Allende", title: "The House of the Spirits", country: "Chile", language: "Spanish", year: 1982 },
        { author: "Franz Kafka", title: "The Metamorphosis", country: "Czech Republic", language: "German", year: 1915 },
        { author: "Toni Morrison", title: "Beloved", country: "United States", language: "English", year: 1987 },
        { author: "Orhan Pamuk", title: "My Name is Red", country: "Turkey", language: "Turkish", year: 1998 },
        { author: "Leo Tolstoy", title: "War and Peace", country: "Russia", language: "Russian", year: 1865 },
        { author: "Arundhati Roy", title: "The God of Small Things", country: "India", language: "English", year: 1997 },
        { author: "Victor Hugo", title: "Les Misérables", country: "France", language: "French", year: 1862 },
        { author: "Banana Yoshimoto", title: "Kitchen", country: "Japan", language: "Japanese", year: 1988 },
        { author: "José Saramago", title: "Blindness", country: "Portugal", language: "Portuguese", year: 1995 },
        { author: "Naguib Mahfouz", title: "Palace Walk", country: "Egypt", language: "Arabic", year: 1956 },
        { author: "Margaret Atwood", title: "The Handmaid's Tale", country: "Canada", language: "English", year: 1985 },
        { author: "Italo Calvino", title: "Invisible Cities", country: "Italy", language: "Italian", year: 1972 },
        { author: "Ngũgĩ wa Thiong'o", title: "A Grain of Wheat", country: "Kenya", language: "English", year: 1967 },
        { author: "Günter Grass", title: "The Tin Drum", country: "Germany", language: "German", year: 1959 },
        { author: "Elena Ferrante", title: "My Brilliant Friend", country: "Italy", language: "Italian", year: 2011 },
        { author: "Mo Yan", title: "Red Sorghum", country: "China", language: "Chinese", year: 1986 },
        { author: "Salman Rushdie", title: "Midnight's Children", country: "India", language: "English", year: 1981 },
        { author: "Clarice Lispector", title: "The Passion According to G.H.", country: "Brazil", language: "Portuguese", year: 1964 },
        { author: "Khaled Hosseini", title: "The Kite Runner", country: "Afghanistan", language: "English", year: 2003 },
        { author: "Umberto Eco", title: "The Name of the Rose", country: "Italy", language: "Italian", year: 1980 },
        { author: "J.M. Coetzee", title: "Disgrace", country: "South Africa", language: "English", year: 1999 }
    ];
    return (
        <div className="content">
            <h1>Books</h1>
            <BookPicker books={books} />
        </div>
    );
};

export default App;
