import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  url: string;
  onClick?: () => void;
}

function LinkButton({ text, url }: ButtonProps) {
  return (
    <Link href={url}>
      <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        {text}
      </a>
    </Link>

    // <button
    //   onClick={onClick}
    //   className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    // >
    //   {text}
    // </button>
  );
}

export default LinkButton;
