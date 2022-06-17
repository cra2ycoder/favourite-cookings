import { useState } from 'react'
import useSwr from 'swr'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CustomCard from '../components/Card'
import { PrimaryHeading } from '@components/Base/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { fetcher } from '../utils'

function Index() {
  const { data = {}, error = {} } = useSwr('/api/home', fetcher)
  const [activeVideoCard, setActiveVideoCard] = useState(-1)

  return (
    <Container maxWidth="lg">
      <PrimaryHeading text="Favorite Recipes" />
      <Box
        sx={{ flexGrow: 1 }}
        className={activeVideoCard !== -1 ? 'hasVideo' : ''}
      >
        {Object.keys(data).length === 0 && (
          <Box
            sx={{
              display: 'flex',
              height: '80vh',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <Grid container spacing={3}>
          {data?.items?.map((x, i) => (
            <Grid
              item
              sm={6}
              xs={12}
              lg={3}
              md={4}
              key={`dynamic-list-${i}`}
              className={`grid-overwrites ${
                activeVideoCard === i ? 'showVideo' : ''
              }`}
            >
              <CustomCard
                {...x}
                state={{
                  defaultCardIndex: i,
                  activeVideoCard,
                  setActiveVideoCard,
                }}
              />
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
  return { props: {} }
}

export { Index }
export default Index
