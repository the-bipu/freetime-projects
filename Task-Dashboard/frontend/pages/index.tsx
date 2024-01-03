import React from 'react';
import type { NextPage } from 'next';

import IndexView from '@/src/index/View/IndexView';
import { IndexController } from '@/src/index/controller/IndexController';


const IndexPage: NextPage = (props) => (
    <div>
        <IndexController {...props}>
            <IndexView />
        </IndexController>
    </div>
);

export default IndexPage;