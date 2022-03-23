import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddRemoveListItem from './AddRemoveListItem';

export default function BookCard({item}) {
  return (
    <Card sx={{height:"100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.author}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          ${item.summary?.splice(0,20)}
        </Typography>
      </CardContent>
      <CardActions>
        <AddRemoveListItem item={item}/>
      </CardActions>
    </Card>
  );
}