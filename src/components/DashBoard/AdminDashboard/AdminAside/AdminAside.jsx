import React from 'react'

const AdminAside = ({ setAdminActiveComponent }) => {
    return (
        <>
            <aside className="w-1/4 bg-gray-200 flex flex-col gap-2 text-center p-2">
                <div>
                    <img
                        class="inline-block h-14 w-14 rounded-full"
                        src="https://avatars.githubusercontent.com/u/58238022?v=4"
                        alt="Dan_Abromov"
                    />
                    <p>Admin Name</p>
                </div>


                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400' onClick={() => setAdminActiveComponent('AdminMainDash')}>Dashboard</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400' onClick={() => setAdminActiveComponent('Products')}>Products</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400' onClick={() => setAdminActiveComponent('Sellers')}>Sellers</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400' onClick={() => setAdminActiveComponent('Inventory')}>Inventory</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400' onClick={() => setAdminActiveComponent('UserMang')}>User Management</p>
                <p className='border border-black min-h-10 cursor-pointer hover:bg-slate-400' onClick={() => setAdminActiveComponent('PromoDisc')}>Promotion & Discount</p>


            </aside>

        </>
    )
}

export default AdminAside