import Link from 'next/link';

interface ButtonProps {
  text: string;
  url: string;
  onClick?: () => void;
}

function LinkButton({ text, url }: ButtonProps) {
  return (
    <Link href={url}>
      <span
        className='bg-yellow-400 hover:bg-slate-500 text-slate-900
      hover:text-yellow-400 border-slate-100 border-solid border-2 font-bold py-4 px-4 rounded'
      >
        {text}
      </span>
    </Link>
  );
}

export default LinkButton;
