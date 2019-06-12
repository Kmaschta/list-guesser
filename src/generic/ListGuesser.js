import React, {Children} from 'react';
import {
    Datagrid,
    List,
    TextField,
    Query
} from 'react-admin';

const fields = [ 'id', 'name', 'role' ];

export default (props) => {
  const children = Children.toArray(props.children);

  return (
    <Query type="INTROSPECT" resource="users">
        {
          ({ data, loading, error }) => {
            if (loading) {
              return <div>LOADING</div>;
            }

            if (error) {
              console.log(error);

              return <div>ERROR</div>
            };

            return (
              <List {...props}>
                <Datagrid>
                  {
                    fields.map(
                      (field, index) => {
                        const child = children.find(({ props: { source }}) => source === field);
                        if (undefined === child) {
                          return (<TextField key={index} source={field} />);
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
