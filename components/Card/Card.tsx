import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function MultiActionAreaCard(props) {
  const { title = '', desc = '', url = '', cta = '' } = props

  return (
    <Card square={true} variant="outlined">
      <CardActionArea href={cta}>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt="green iguana"
        />
        <CardContent style={{ fontFamily: 'Amatic SC' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily={'inherit'}
            fontSize={40}
          >
            {title}
          </Typography>
          {desc && (
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Link href={cta}>
          <Button size="small" color="primary">
            Explore
          </Button>
        </Link>
      </CardActions> */}
    </Card>
  )
}
