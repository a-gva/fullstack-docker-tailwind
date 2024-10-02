// Creates a page for each user in the database

type TypeUsers = {
  id: string;
  name: string;
  email: string;
};

// 1. Produces paths from the IDs of the users
//get static paths - creates routes for each user
// generates `/users/1` and `/users/2`

// export const getUser = async () => {
//   const res = await fetch('http://localhost:3000/api/users/');
//   const data: TypeUsers[] = await res.json();

//   // Creates an array of paths
//   const paths = data.map((user: any) => {
//     // console.log(user);
//     // console.log(`User ID on Track: ${user.id}`);
//     return {
//       params: { id: user.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

interface UserPageProps {
  params: {
    userID: string;
  };
}

// 2. Fetches the data for a single user
export const getUserData = async (userID: string) => {
  console.log(userID);
  const res = await fetch(`http://localhost:3000/api/users/${userID}`, {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
      Accept: 'application/json; charset=UTF-8',
    },
  });
  console.log(res);
  const data = await res.json();

  if (!data) {
    console.log('No user data found');
  }
  return data;
};

export default async function User({ params }: UserPageProps) {
  const { userID } = params;

  const userData = await getUserData(userID);

  if (!userData) {
    return (
      <div>
        <h1>No User Data Found</h1>
      </div>
    );
  }

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
