// Creates a page for each user in the database
import { InferGetStaticPropsType } from 'next';

type TypeUsers = {
  id: string;
  name: string;
  email: string;
};

// 1. Produces paths from the IDs of the users
//get static paths - creates routes for each user
// generates `/users/1` and `/users/2`
export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/users/');
  const data: TypeUsers[] = await res.json();

  // Creates an array of paths
  const paths = data.map((user: any) => {
    // console.log(user);
    // console.log(`User ID on Track: ${user.id}`);
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// 2. Fetches the data for a single user
export const getStaticProps = async (context: any) => {
  console.log('Passo: 0 - Render context below !!');
  console.log(context);
  const id = context.params.id;
  console.log('Passo: 1 - Render Id !!');
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
      Accept: 'application/json; charset=UTF-8',
    },
  });
  console.log('Passo: 2 - Render Res Below!!');
  console.log(res);
  console.log('Passo: 3 - Last Step Before res.json !!');
  const data = await res.json();

  // if (!userData) {
  //   return {
  //     notFound: true,
  //   };
  // }
  return {
    props: { user: data }, // will be passed to the page component as props
  };
};

//3. Renders the user data
export default function User({
  user,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <section className='bg-slate-900 min-h-screen'>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <h1 className='font-bold text-4xl text-slate-100 my-10'>Member</h1>
          </div>
          <div className='px-10 grid sm:grid-cols-4 gap-3 lg:grid-cols-6 xsm:px-5  justify-center text-slate-100'>
            <div
              className='xsm:mx-5 xsm:w-96 overflow-hidden h-28 px-2 flex flex-col border-spacing-1 border-slate-200 border rounded-lg shadow-lg justify-center bg bg-slate-600'
              key={user.id}
            >
              <p className='font-medium'>{user.name}</p>
              <p className='text-xs font-light'>{user.email}</p>
              <p className='text-xs font-light'>{user.id}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
