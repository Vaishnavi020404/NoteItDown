import React from 'react'
// import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate} from 'react-router-dom';
import api from '../lib/axios';

const CreatePage = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
    toast.error("Please fill in both title and content");
    return;  
  }


    setLoading (true);
    try{
      await api.post("/notes",{
        title,
        content,
      });

      toast.success("Note created successfully");
      navigate("/");
      }
    catch (error){
      console.log("Error creating note:", error);
      if(error.response.status===429){
        toast.error("Too many requests. Please wait and try again later."
          ,{
          duration: 4000,
          icon:"💀", 
      });
      }else{
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }finally{
      setLoading(false);
    }
  }  
  return (
    <div className='min-h-screen bg-base-300'>
      <div className="container  mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5" />
          Back to Notes
          </Link>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}> 
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>

                  </label> 
                  <input 
                    type="text" 
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>


                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea 
                    className="textarea textarea-bordered h-40" 
                    placeholder="Write your new note here"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                
                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary"  disabled={loading}> 
                  {loading ? "Creating... " : "Create Note"}

                  </button>
                  </div>
  


              </form>

          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CreatePage