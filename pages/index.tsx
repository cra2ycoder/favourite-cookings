import useSwr from 'swr'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CustomCard from '../components/Card'
import { PrimaryHeading } from '@components/Base/Typography'
import { fetcher } from '../utils'

function Index() {
  const { data = [], error = {} } = useSwr('/api/home', fetcher)

  return (
    <Container maxWidth="lg">
      <PrimaryHeading text="Favorite Cookings" />
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

/**
 *
 * @todo
 * where we have to connect to DB to handle the data
 * @returns
 */
export async function getServerSideProps() {
  return {}
}

export { Index }
export default Index
