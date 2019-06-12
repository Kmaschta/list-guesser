import React, {Children} from 'react';
import {
    Datagrid,
    List,
    TextField,
    Query
} from 'react-admin';
import fieldFactory from './fieldFactory';

const defaultFields = [
  { name: 'id', range: 'http://www.w3.org/2001/XMLSchema#integer' },
  { name: 'name' },
  { name: 'role' }
];

export default (props) => {
  const children = Children.toArray(props.children);

  return (
    <Query type="INTROSPECT">
        {
          ({ data, loading, error }) => {
            if (loading) {
              return <div>LOADING</div>;
            }

            if (error) {
              console.log(error);

              return <div>ERROR</div>
            };

            const { fields: allowedFieldNames } = props;
            const fields = defaultFields.filter(({ name }) => allowedFieldNames.includes(name));

            return (
              <List {...props}>
                <Datagrid>
                  {
                    fields.map(
                      (field) => {
                        const child = children.find(({ props: { source }}) => source === field.name);
                        if (undefined === child) {
                          return fieldFactory(field);
                        }

                        return child;
                      }
                    )
                  }
                </Datagrid>
              </List>
            );
          }
        }
    </Query>
  );
}
