import { Form } from 'react-bootstrap';
import { SectionType } from '../types.d';
import React from 'react';

interface Props {
  type: SectionType
  loading?: boolean
  value: string
  onChange: (value: string) => void
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean}): string => {
  if (type === SectionType.From) return 'Introducir texto...';
  if (loading === true) return 'Cargando...';
  return 'Traducción';
}

export function TextArea({ type, loading, value, onChange }: Props) {

  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea'
      placeholder={getPlaceholder({type, loading})}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  );
}