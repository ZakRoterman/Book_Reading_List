import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Add Book to reading list</Button>
      <Button>I read this book</Button>
      <Button>I recommend this book</Button>
    </ButtonGroup>
  );
}