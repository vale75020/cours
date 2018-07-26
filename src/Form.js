import React from "react";


const Form = () => {
    return(
        <div>
        <form method="POST" action="http://localhost:5000/cours/add" enctype="multipart/form-data">
        <input name="name" className="form-control" type="text" placeholder="Name" />
        <input name="author" className="form-control" type="text" placeholder="Author" />
        <input name="tags" className="form-control" type="text" placeholder="Tags" />
        <input name="date" className="form-control" type="date" placeholder="Date" />
        <input name="img" className="form-control" type="file" placeholder="Image" />
        <button className='btn btn-primary' type='submit'>Add a new cour</button>
        </form>
        </div>
    )
}

export default Form;