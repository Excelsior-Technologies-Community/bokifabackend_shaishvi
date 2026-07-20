import React,{useState,useEffect} from "react";
import API from "../services/api";
import BookTable from "../components/BookTable";

const Managebook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await API.get("/books");
                setBooks(response.data.books);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold mb-5">Manage Books</h2>
            <BookTable books={books} />
        </div>
    );
};
export default Managebook;