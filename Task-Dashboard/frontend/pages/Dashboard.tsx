import React from 'react';
import type { NextPage } from 'next';
import { DashboardController } from '@/src/dashboard/controller/DashboardController';
import DashboardView from '@/src/dashboard/View/DashboardView';


const DashboardPage: NextPage = (props) => (
    <div>
        <DashboardController {...props}>
            <DashboardView />
        </DashboardController>
    </div>
);

export default DashboardPage;