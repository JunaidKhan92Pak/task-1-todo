import React, { useState, useEffect } from 'react';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://65a6afdf74cf4207b4f0a40c.mockapi.io/api/v1/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='w-[100%] flex flex-col min-h-screen ' >
      <section>
        <h1 className='text-[40px] font-semibold text-center text-[#ff8d42]'>Missing Persons</h1>
      </section>

      {/* Section for all users div */}
      {loading ? (
        <div className="loader"></div>
      ) :
        (<section className='w-[100%] p-2 flex flex-wrap justify-around gap-3'>
          {/* Div for user  */}
          {users.map(user => (
            <div key={user.id} className=' w-[50%] sm:w-[30%] lg:w-[20%] h-[300px] bg-[#cc9734] '>
              {/* Div for user Pcture */}
              <div className='w-[100%]'>
                <img className='w-[100%] h-[200px] object-fit' src={user.avatar} alt="img"/>
              </div>
              {/* Div for user Informaton  */}
              <div className='w-[100%] h-[100px] text-center text-white'>
                <h2 className='text-[24px] font-bold'>{user.name}</h2>
                <p className='text-[12px] '>{user.createdAt}</p>
              </div>
            </div>
          ))}
        </section>)
      }

    </main>

  )

};

export default UserList;