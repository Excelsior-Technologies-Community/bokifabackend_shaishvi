import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

const Editcategory = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");


  useEffect(() => {
    fetchCategory();
  }, []);


  const fetchCategory = async () => {

    try {

      const res = await API.get(`/categories`);

      const category = res.data.data.find(
        (cat) => cat._id === id
      );

      setName(category.name);

    } catch(error) {

      console.log(error);

    }

  };


  const handleSubmit = async(e)=>{

    e.preventDefault();


    try {

      const res = await API.put(
        `/categories/${id}`,
        {
          name:name.trim()
        }
      );


      alert(res.data.message);

      navigate("/categories");


    } catch(error){

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Update failed"
      );

    }

  };


return (

<div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">


<h1 className="text-3xl font-bold mb-6">
Edit Category
</h1>


<form
onSubmit={handleSubmit}
className="space-y-5"
>


<input

type="text"

value={name}

onChange={(e)=>setName(e.target.value)}

className="w-full border rounded-lg p-3"

required

/>


<button

className="bg-green-600 text-white px-6 py-3 rounded-lg"

>
Update Category
</button>


</form>


</div>

);

};


export default Editcategory;