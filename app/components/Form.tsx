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
    <section className='flex flex-col justify-center items-center min-h-screen '>
      <div className='w-full max-w-md bg-orange-100 pt-5 rounded-md'>
        <div className=''>
          <h1 className='px-8 font-bold text-lg'>
            Subscribe to our newsletter
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='shadow-lg rounded px-8 pt-6 pb-8'
        >
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
              className='cursor-pointer border-solid border-slate-500 text-slate-700 border-2 rounded px-5 py-2 font-bold text-center items-center  hover:bg-slate-500 hover:text-slate-50 hover:border-slate-500'
            />
          </div>
        </form>
      </div>
      <div>
        <LinkButton text='Ver Usuários' url='users/list' />
      </div>
    </section>
  );
}
