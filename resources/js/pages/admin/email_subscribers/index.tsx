import React from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { PaginationData, ColumnConfig } from '@/types/data-table.types';
import { Mail } from 'lucide-react';

interface EmailSubscriber extends Record<string, unknown> {
    id: number;
    email: string;
    created_at: string;
}

interface Props {
    subscribers: EmailSubscriber[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function EmailSubscribersIndex({
    subscribers,
    pagination,
    offset,
    filters,
    search,
    sortBy,
    sortOrder,
}: Props) {
    const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
    } = useDataTable();

    const columns: ColumnConfig<Record<string, unknown>>[] = [
        {
            key: 'email',
            label: 'Email',
            sortable: true,
            render: (subscriber) => (
                <div className="font-mono text-sm text-gray-900 dark:text-gray-100">
                    {subscriber.email as string}
                </div>
            ),
        },
        {
            key: 'created_at',
            label: 'Subscribed At',
            sortable: true,
            render: (subscriber) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {new Date(subscriber.created_at as string).toLocaleDateString()}
                </div>
            ),
        },
    ];

    return (
        <AdminLayout activeSlug="email_subscribers">
            <Head title="Email Subscribers" />

            <div className="mx-auto">
                <DataTable
                    data={subscribers}
                    columns={columns}
                    pagination={pagination}
                    offset={offset}
                    showNumbering={true}
                    onSearch={handleSearch}
                    onFilterChange={handleFilterChange}
                    onSort={handleSort}
                    onPerPageChange={handlePerPageChange}
                    onPageChange={handlePageChange}
                    searchValue={search}
                    filterValues={filters}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    isLoading={isLoading}
                    emptyMessage="No subscribers found"
                    searchPlaceholder="Search subscribers by email..."
                />
            </div>
        </AdminLayout>
    );
}
