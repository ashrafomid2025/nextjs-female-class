import React from 'react'

function layout({
    children,
    Team,
    Contacts,
}: {
    children: React.ReactNode;
    Team: React.ReactNode;
    Contacts: React.ReactNode;
}) {
  return (
    <div>
        <nav className='w-full flex justify-between items-center gap-2 bg-gray-500'>
            <h1 className='text-4xl text-white'>dashBoard</h1>
            <div className='flex  justify-between gap-4 items-center p-4 text-white'>
                <a href='/users/'>
                People
                </a>
                  <a href='/posts'>
                Articls
                </a>

            </div>
        </nav>
        <div className='grid w-full grid-cols-2 gap-4'>
       <div className='border p-4 bg-gray-300'> {children} </div>
       <div className='border p-7 bg-gray-300'> {Contacts} </div>
       <div className='border p-8 bg-gray-300'> {Team} </div>
</div>


    <footer className='text-gray-800 h-80 bg-gray-400 text-3xl text-center p-4'>
        This is the last part
    </footer>
    </div>
  )
}

export default layout