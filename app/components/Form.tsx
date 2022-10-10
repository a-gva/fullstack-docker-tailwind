import { useForm } from 'react-hook-form';
import LinkButton from './LinkButton';

type FormValues = {
  name: string;
  email: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  //onSubmit function

  const onSubmit = async (register: FormValues) => {
    console.log(`Register values: ${JSON.stringify(register)}`);
    const payload = await fetch('/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(register),
    });
    console.log(payload);
  };

  return (
    <section className='flex flex-col justify-center items-center min-h-screen bg-slate-900'>
      <div className='w-80 h-80 bg-slate-100 rounded-md shadow-lg px-8 py-8 flex-col'>
        <div>
          <h1 className='font-bold text-lg mb-5'>
            Subscribe to our newsletter
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className=''>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Name'
              {...register('name')}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              E-mail
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Email'
              {...register('email')}
            />
          </div>
          {/* <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
              {...register('password')}
            />
          </div> */}
          <div className='flex text-center items-center'>
            <input
              type='submit'
              className='cursor-pointer border-solid border-slate-500 text-slate-700 border rounded px-5 py-1 mt-3 font-bold text-center items-center  hover:bg-slate-500 hover:text-slate-50 hover:border-slate-500'
            />
          </div>
        </form>
      </div>
      <div className='text-center mt-5 '>
        <LinkButton text='Ver Usuários' url='users/list' />
      </div>
    </section>
  );
}
