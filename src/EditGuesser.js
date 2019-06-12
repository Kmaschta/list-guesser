import React, { Component } from 'react';
import inflection from 'inflection';
import { withStyles } from '@material-ui/core/styles';
import {
    EditController,
    InferredElement,
    getElementsFromRecords,
} from 'ra-core';
import { Query, EditView } from 'react-admin';
import editFieldTypes from './editFieldTypes'
import inputFactory from './inputFactory';

const styles = {

}

export class EditViewGuesser extends Component {
    state = {
        inferredChild: null,
    };
    componentDidUpdate() {

        console.log('EditViewGuesser');
        const { api, record, resource } = this.props;
        if (record && !this.state.inferredChild) {
            console.log(this.props);

            const fields = [];

            const inputs = fields.map(field => inputFactory(field, { api, resource }));
            const inferredElements = getElementsFromRecords(
                [record],
                editFieldTypes
            );
            const inferredChild = new InferredElement(
                editFieldTypes.form,
                null,
                inferredElements
            );

            process.env.NODE_ENV !== 'production' &&
                // eslint-disable-next-line no-console
                console.log(
                    `Guessed Edit:

export const ${inflection.capitalize(
                        inflection.singularize(resource)
                    )}Edit = props => (
    <Edit {...props}>
${inferredChild.getRepresentation()}
    </Edit>
);`
                );
            this.setState({ inferredChild: inferredChild.getElement() });
        }
    }

    render() {
        return <EditView {...this.props}>{this.state.inferredChild}</EditView>;
    }
}

EditViewGuesser.propTypes = EditView.propTypes;

const EditGuesser = props => (
    <Query type="INTROSPECT" resource={props.ressource}>
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
                    <EditController {...props}>
                        {controllerProps => <EditViewGuesser api={data} {...props} {...controllerProps} />}
                    </EditController>
                );
            }
        }
    </Query>
);

export default withStyles(styles)(EditGuesser);
