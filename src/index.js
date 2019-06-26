/* eslint react/jsx-key: off */
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'; // eslint-disable-line import/no-unresolved
import { render } from 'react-dom';
import { Route } from 'react-router';
import { reducer as tree } from 'ra-tree-ui-materialui';

import authProvider from './authProvider';
import comments from './comments';
import CustomRouteLayout from './customRouteLayout';
import CustomRouteNoLayout from './customRouteNoLayout';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import posts from './posts';
import users from './users';
import tags from './tags';
import AdvancedEditGuesser from './EditGuesser';

render(
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        title="Example Admin"
        locale="en"
        customReducers={{ tree }}
    >
        {permissions => [
            <Resource name="books" list={ListGuesser} edit={AdvancedEditGuesser} />,
        ]}
    </Admin>,
    document.getElementById('root')
);
