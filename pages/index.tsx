import useSwr from 'swr'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CustomCard from '../components/Card'
import { fetcher } from '../utils'

function Index() {
  const { data = [], error = {} } = useSwr('/api/home', fetcher)

  return (
    <Container maxWidth="lg">
      <Box padding={2} marginBottom={10}>
        <Typography
          align="center"
          fontSize={72}
          fontFamily={'inherit'}
          fontWeight={900}
        >
          Favorite Cookings
        </Typography>
        <div
          style={{
            height: '6px',
            background: '#d00d0d',
            width: '100%',
            margin: 'auto',
          }}
        ></div>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {data.map((x, i) => (
            <Grid item xs={12} lg={3} md={3} key={`home-list-${i}`}>
              <CustomCard {...x} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export { Index }
export default Index
