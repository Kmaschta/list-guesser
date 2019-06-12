import {
  BooleanField,
  ChipField,
  DateField,
  EmailField,
  NumberField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  TextField,
  UrlField,
} from 'react-admin';
import React from 'react';

export default (field, options) => {
  switch (field.id) {
    case 'http://schema.org/email':
      return (
        <EmailField
          key={field.name}
          source={field.name}
        />
      );

    case 'http://schema.org/url':
      return (
        <UrlField
          key={field.name}
          source={field.name}
        />
      );
  }

  switch (field.range) {
    case 'http://www.w3.org/2001/XMLSchema#integer':
    case 'http://www.w3.org/2001/XMLSchema#float':
      return (
        <NumberField
          key={field.name}
          source={field.name}
        />
      );

    case 'http://www.w3.org/2001/XMLSchema#date':
    case 'http://www.w3.org/2001/XMLSchema#dateTime':
      return (
        <DateField
          key={field.name}
          source={field.name}
        />
      );

    case 'http://www.w3.org/2001/XMLSchema#boolean':
      return (
        <BooleanField
          key={field.name}
          source={field.name}
        />
      );

    default:
      return (
        <TextField
          key={field.name}
          source={field.name}
        />
      );
  }
};
