import React from 'react';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

interface IActionButton {
  id: string;
  hrefAPI: string;
  method: string;
  onClick?: () => void;
}

async function handleDelete(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log(data);
    alert('User Deleted');
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

function DeleteButton({ hrefAPI, method, id }: IActionButton) {
  if (method === 'DELETE') {
    return (
      <div onClick={() => handleDelete(id)}>
        <a>
          <DeleteIcon className='hover:fill-red-500 cursor-pointer' />
        </a>
      </div>
    );
  } else if (method === 'PUT') {
    return (
      <div onClick={() => handleDelete(id)}>
        <a className=''>
          <Edit className='hover:fill-blue-500 cursor-pointer' />
        </a>
      </div>
    );
  } else {
    return null;
  }
}

export default DeleteButton;
