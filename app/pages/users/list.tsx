import LinkButton from '../../components/LinkButton';
import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch('http://localhost:3000/api/users/getusers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const usersData = await data.json();

  if (!usersData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { usersData }, // will be passed to the page component as props
  };
};

export default function List({
  usersData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <section className='bg-slate-900 min-h-screen'>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <h1 className='font-bold text-4xl text-slate-100 my-10'>Members</h1>
          </div>
          <div className='px-10 grid sm:grid-cols-5 gap-3 lg:grid-cols-8 xsm:px-5  justify-center text-slate-100'>
            {usersData.map((user: any) => (
              <div
                className='xsm:mx-5 xsm:w-96 overflow-hidden h-28 px-2 flex flex-col border-spacing-1 border-slate-200 border rounded-lg shadow-lg justify-center bg bg-slate-600'
                key={user.id}
              >
                <p className='font-medium'>{user.name}</p>
                <p className='text-xs font-light'>{user.email}</p>
                <p className='text-sm font-light'>{user.id}</p>
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
