'use client';

import { ApprovedAppointmentTable } from '@/components/table/approved-data-table';
import { ApprovedAppointment } from '@/lib/types';
import axios, { AxiosResponse } from 'axios';
import React from 'react'

const Page = () => {

    const [approvedData, setRequestedData] = React.useState<ApprovedAppointment[]>([]);

    React.useEffect(() => {
        const getData = async () => {
            const response: AxiosResponse = await axios.get('/api/approved-appointment');
            if (response.status === 200) {
                const data = await response.data;
                setRequestedData(data?.data || []);
            }
        }
        getData()
    }, []);

    React.useEffect(() => {
        console.log(approvedData)
    }, [approvedData]);

  return (
    <React.Fragment>
        <main className=' h-fit w-full overflow-hidden flex justify-start items-start py-3 px-12'>
            <ApprovedAppointmentTable data={approvedData} />
        </main>
    </React.Fragment>
  )
}

export default Page