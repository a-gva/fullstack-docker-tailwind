'use client';

import Link from 'next/link';
import ActionButton from '../../components/ActionButton';
import LinkButton from '../../components/LinkButton';

// sets the type of the user
type IUser = {
  id: string;
  name: string;
  email: string;
};

export async function getUsers() {
  const res = await fetch('http://localhost:3000/api/users/');
  const usersData: IUser[] = await res.json();

  return usersData;
}

export default async function Users() {
  const usersData = await getUsers();
  return (
    <>
      <section className='bg-slate-900 min-h-screen'>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <h1 className='font-bold text-4xl text-slate-100 my-10'>
              Subscription Members
            </h1>
          </div>
          <div className='px-10 grid sm:grid-cols-4 gap-3 lg:grid-cols-6 xsm:px-5  justify-center text-slate-100'>
            {usersData &&
              usersData.map((user: any) => (
                <div
                  className='xsm:mx-5 xsm:w-96 overflow-hidden h-28 px-2 flex flex-col border-spacing-1 border-slate-200 border rounded-lg shadow-lg justify-center bg bg-slate-600'
                  key={user.id}
                >
                  <p className='font-medium text-xs'>{user.name}</p>
                  <p className='text-xs font-light'>{user.email}</p>

                  <Link href={`http://localhost:3000/users/${user.id}`}>
                    <p className='text-xs cursor-pointer'>
                      <strong>ID:</strong> {user.id}
                    </p>
                  </Link>
                  <div className='flex flex-row justify-around'>
                    <ActionButton
                      method='PUT'
                      hrefAPI={`http://localhost:3000/api/users/${user.id}`}
                      id={user.id}
                    />
                    <ActionButton
                      method='DELETE'
                      hrefAPI={`http://localhost:3000/api/users/${user.id}`}
                      id={user.id}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className='fixed top-5 right-1'>
            <LinkButton text='Home' url='/' />
          </div>
        </div>
      </section>
    </>
  );
}
