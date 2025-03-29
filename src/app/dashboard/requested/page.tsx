'use client';

import { RequestedAppointmentTable } from '@/components/table/requested-data-table';
import { RequestedAppointment } from '@/lib/types';
import axios, { AxiosResponse } from 'axios';
import React from 'react'

const Page = () => {

    const [requestedData, setRequestedData] = React.useState<RequestedAppointment[]>([]);

    React.useEffect(() => {
        const getData = async () => {
            const response: AxiosResponse = await axios.get('/api/requested-appointment');
            if (response.status === 200) {
                const data = await response.data;
                setRequestedData(data?.data || []);
            }
        }
        getData()
    }, []);

  return (
    <React.Fragment>
        <main className=' h-fit w-full overflow-hidden flex justify-start items-start py-3 px-12'>
            <RequestedAppointmentTable data={requestedData} />
        </main>
    </React.Fragment>
  )
}

export default Page