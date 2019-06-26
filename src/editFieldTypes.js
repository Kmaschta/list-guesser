import React from 'react';
import {
    SimpleForm, SimpleFormIterator,
    ArrayInput, BooleanInput, DateInput, NumberInput,
    ReferenceInput, ReferenceArrayInput, SelectInput, TextInput
} from 'react-admin';

export default {
    form: {
        component: SimpleForm,
        representation: (_, children) => `        <SimpleForm>
${children.map(child => `            ${child.getRepresentation()}`).join('\n')}
        </SimpleForm>`,
    },
    array: {
        // eslint-disable-next-line react/display-name
        component: ({ children, ...props }) => (
            <ArrayInput {...props}>
                <SimpleFormIterator>{children}</SimpleFormIterator>
            </ArrayInput>
        ),
        representation: (props, children) =>
            `<ArrayInput source="${
            props.source
            }"><SimpleFormIterator>${children
                .map(child => child.getRepresentation())
                .join('\n')}</SimpleFormIterator></ArrayInput>`,
    },
    boolean: {
        component: BooleanInput,
        representation: props => `<BooleanInput source="${props.source}" />`,
    },
    date: {
        component: DateInput,
        representation: props => `<DateInput source="${props.source}" />`,
    },
    email: {
        component: TextInput,
        representation: props => `<TextInput source="${props.source}" />`,
    },
    id: {
        component: TextInput,
        representation: props => `<TextInput source="${props.source}" />`,
    },
    number: {
        component: NumberInput,
        representation: props => `<NumberInput source="${props.source}" />`,
    },
    reference: {
        component: ReferenceInput,
        representation: (props, children) =>
            `<ReferenceInput source="${props.source}" reference="${
            props.reference
            }">${children.getRepresentation()}</ReferenceInput>`,
    },
    referenceChild: {
        component: props => <SelectInput optionText="id" {...props} />, // eslint-disable-line react/display-name
        representation: () => `<SelectInput optionText="id" />`,
    },
    referenceArray: {
        component: ReferenceArrayInput,
        representation: props =>
            `<ReferenceArrayInput source="${props.source}" reference="${
            props.reference
            }"><TextInput source="id" /></ReferenceArrayInput>`,
    },
    referenceArrayChild: {
        component: props => <SelectInput optionText="id" {...props} />, // eslint-disable-line react/display-name
        representation: () => `<SelectInput optionText="id" />`,
    },
    richText: {
        component: TextInput,
        representation: props => `<TextInput source="${props.source}" />`,
    },
    string: {
        component: TextInput,
        representation: props => `<TextInput source="${props.source}" />`,
    },
    url: {
        component: TextInput,
        representation: props => `<TextInput source="${props.source}" />`,
    },
};
