import React from 'react';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';

interface DeleteButtonProps {
  url: string;
  onClick?: () => void;
}

function DeleteButton({ url }: DeleteButtonProps) {
  return (
    <Link href={url}>
      <a className=''>
        <DeleteIcon className='fill-red-700' />
      </a>
    </Link>
  );
}

export default DeleteButton;
