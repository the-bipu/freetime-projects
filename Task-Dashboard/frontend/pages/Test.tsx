import React from 'react';
import type { NextPage } from 'next';

import TestView from '@/src/test/View/TestView';
import { TestController } from '@/src/test/controller/TestController';


const TestPage: NextPage = (props) => (
    <div>
        <TestController {...props}>
            <TestView />
        </TestController>
    </div>
);

export default TestPage;