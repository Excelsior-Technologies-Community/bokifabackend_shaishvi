import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

const Editbook = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
    stock: "",
    category: "",
  });

  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");


  useEffect(() => {
    fetchBook();
    fetchCategories();
  }, []);


  const fetchBook = async () => {
    try {

      const res = await API.get(`/books/${id}`);

      const data = res.data.book;

      setBook({
        title: data.title,
        author: data.author,
        price: data.price,
        description: data.description,
        stock: data.stock,
        category: data.category._id,
      });

      setOldImage(data.image);

    } catch(error){
      console.log(error);
    }
  };


  const fetchCategories = async () => {
    try {

      const res = await API.get("/categories");

      setCategories(res.data.data);

    } catch(error){
      console.log(error);
    }
  };


  const handleChange = (e)=>{

    setBook({
      ...book,
      [e.target.name]: e.target.value
    });

  };


  const handleImage=(e)=>{
    setImage(e.target.files[0]);
  };


  const handleSubmit = async(e)=>{

    e.preventDefault();


    const formData = new FormData();


    formData.append("title",book.title);
    formData.append("author",book.author);
    formData.append("price",book.price);
    formData.append("description",book.description);
    formData.append("stock",book.stock);
    formData.append("category",book.category);


    if(image){
      formData.append("image",image);
    }


    try{

      const res = await API.put(
        `/books/${id}`,
        formData
      );


      alert(res.data.message);

      navigate("/books");


    }catch(error){

      console.log(error);
      alert(
        error.response?.data?.message ||
        "Update failed"
      );

    }

  };


return (

<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

<h1 className="text-3xl font-bold mb-8">
Edit Book
</h1>


<form onSubmit={handleSubmit} className="space-y-5">


<input
name="title"
value={book.title}
onChange={handleChange}
className="w-full border rounded-lg p-3"
/>


<input
name="author"
value={book.author}
onChange={handleChange}
className="w-full border rounded-lg p-3"
/>


<input
type="number"
name="price"
value={book.price}
onChange={handleChange}
className="w-full border rounded-lg p-3"
/>


<input
type="number"
name="stock"
value={book.stock}
onChange={handleChange}
className="w-full border rounded-lg p-3"
/>


<select
name="category"
value={book.category}
onChange={handleChange}
className="w-full border rounded-lg p-3"
>

<option value="">
Select Category
</option>

{
categories.map(category=>(
<option 
key={category._id}
value={category._id}
>
{category.name}
</option>
))
}

</select>


<textarea
name="description"
value={book.description}
onChange={handleChange}
rows="5"
className="w-full border rounded-lg p-3"
/>


{
oldImage && 
<img
src={`http://localhost:5000${oldImage}`}
className="w-40 h-52 object-cover"
/>
}


<input
type="file"
onChange={handleImage}
/>


<button
className="bg-green-600 text-white px-8 py-3 rounded-lg"
>
Update Book
</button>


</form>

</div>

)

}


export default Editbook;