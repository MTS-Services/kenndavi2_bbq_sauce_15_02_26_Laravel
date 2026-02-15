import * as React from 'react';
import { FrontendHeader } from '@/layouts/partials/frontend/header';
import { FrontendFooter } from '@/layouts/partials/frontend/footer';

interface FrontendLayoutProps {
    children: React.ReactNode;
}

export default function FrontendLayout({ children }: FrontendLayoutProps) {
    return (
        <div className="flex h-[100dvh] flex-col">
            {/* <FrontendHeader /> */}
            <main className="flex-1 flex flex-col">{children}</main>
            {/* <FrontendFooter /> */}
        </div>
    );
}
