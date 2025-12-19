import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import type { PaginationState } from '@tanstack/react-table';
import { useState } from 'react';

type ExampleUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

const exampleUsers: ExampleUser[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
  { id: '6', name: 'Diana Martinez', email: 'diana@example.com', role: 'Admin', status: 'Active' },
  { id: '7', name: 'Ethan Davis', email: 'ethan@example.com', role: 'User', status: 'Inactive' },
  { id: '8', name: 'Fiona Garcia', email: 'fiona@example.com', role: 'Admin', status: 'Active' },
  {
    id: '9',
    name: 'George Rodriguez',
    email: 'george@example.com',
    role: 'User',
    status: 'Active',
  },
  { id: '10', name: 'Hannah Lee', email: 'hannah@example.com', role: 'Admin', status: 'Active' },
];

export default function DataTableExamples() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const paginationState: PaginationState = {
    pageIndex: currentPage - 1,
    pageSize: pageSize,
  };

  const sortableColumns: ColumnDef<ExampleUser, unknown>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      enableSorting: true,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      enableSorting: true,
    },
    {
      accessorKey: 'role',
      header: 'Role',
      enableSorting: true,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      enableSorting: true,
    },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>With Sorting</CardTitle>
          <CardDescription>Table with sortable columns</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            pagination={paginationState}
            data={exampleUsers}
            columns={sortableColumns}
            totalPages={10}
            paginationOptions={{
              onPaginationChange: (pagination) => {
                const newPagination =
                  typeof pagination === 'function' ? pagination(paginationState) : pagination;
                setCurrentPage(newPagination.pageIndex + 1);
                setPageSize(newPagination.pageSize);
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
