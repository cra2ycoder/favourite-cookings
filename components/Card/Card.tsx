import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function MultiActionAreaCard(props) {
  const { title = '', desc = '', url = '', cta = '' } = props

  return (
    <Card
      square={true}
      variant="outlined"
      style={{ display: 'flex', height: '100%' }}
    >
      <CardActionArea href={cta}>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize={30}
            fontWeight={500}
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
    </Card>
  )
}
