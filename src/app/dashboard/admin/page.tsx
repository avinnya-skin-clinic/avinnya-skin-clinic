'use client';

import { AdminTable } from '@/components/table/admin-data-table';
import { Admin } from '@/lib/types';
import axios, { AxiosResponse } from 'axios';
import React from 'react'

const Page = () => {

    const [adminData, setAdminData] = React.useState<Admin[]>([]);

    React.useEffect(() => {
        const getData = async () => {
            const response: AxiosResponse = await axios.get('/api/admin');
            if (response.status === 200) {
                const data = await response.data;
                setAdminData(data?.data || []);
            }
        }
        getData()
    }, []);

  return (
    <React.Fragment>
        <main className=' h-fit w-full overflow-hidden flex justify-start items-start py-3 px-12'>
            <AdminTable data={adminData} />
        </main>
    </React.Fragment>
  )
}

export default Page