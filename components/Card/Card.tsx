import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function MultiActionAreaCard(props) {
  const {
    snippet: { title = '', thumbnails = {}, resourceId = {} } = {},
    state: {
      defaultCardIndex = 0,
      activeVideoCard,
      setActiveVideoCard = () => {},
    } = {},
  } = props

  const [playVideo, setPlayVideo] = useState<boolean>(false)

  const videoId = `http://www.youtube.com/embed/${resourceId?.videoId}?enablejsapi=1`

  const loadVideo = () => {
    setPlayVideo(true)
    setActiveVideoCard(defaultCardIndex)
  }

  const shouldLoadVideo = playVideo && defaultCardIndex === activeVideoCard

  return (
    <Card
      square={true}
      variant="outlined"
      style={{ display: 'flex', height: '100%', borderRadius: '0.5rem' }}
      onClick={loadVideo}
    >
      <CardActionArea>
        {!shouldLoadVideo && (
          <CardMedia
            component="img"
            height="140"
            image={thumbnails?.medium?.url}
            alt="green iguana"
          />
        )}
        {shouldLoadVideo && (
          <iframe
            id="player"
            width="100%"
            height="390"
            src={videoId}
            frameBorder="0"
          />
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize={16}
            fontWeight={500}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
