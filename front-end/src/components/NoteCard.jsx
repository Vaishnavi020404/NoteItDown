import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { formatDate } from '../lib/utils';

const NoteCard = ({note}) => {
  return <Link to={`/note/${note._id}`}
  className="card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[cyan]">
  <div className="card-body">
    <h3 className="card-title text-base-content/150">{note.title}</h3>
    <p className="text-base-content/90 line-clamp-3">{note.content}</p>
    <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-base-content/50">
             {formatDate(new Date(note.createdAt))}
        </span>  
        <div className='flex items-center gap-5'>
            <PenSquareIcon className='size-4' />
            <button className='btn btn-ghost btn-sm text-error'>
                <Trash2Icon className='size-4'/>
            </button>
        </div>
    </div>
  </div>
  </Link>;  
};

export default NoteCard