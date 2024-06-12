import { theme } from '@/theme/darkTheme';
import { users } from '../../../data/users.data';
import AppLayout from '../../layout/AppLayout';
import { columns } from '../components/datatable/columns';
import { DataTable } from '../components/datatable/data-table';
import { useState } from 'react';

function getData() {
  return users;
}

const UsersPage = () => {
  const [data, setData] = useState(getData()); 



  const {card} = theme;

  return (
    <AppLayout title="Usuarios">
      <div className="flex w-full items-center flex-col gap-5 ">
        <div className={`w-9/12 px-10 py-5 rounded-3xl ${card.backgroundColor } mt-10`}>
          <DataTable columns={columns} data={data} setData={setData} />
        </div>
      </div>
    </AppLayout>
  );
};

export default UsersPage;
export { UsersPage };
