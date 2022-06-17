import { useState, useEffect } from 'react'
import useSwr from 'swr'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CustomCard from '@components/Card'
import { Filter } from '@components/Base/Filter'
import { PrimaryHeading } from '@components/Base/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { fetcher, filterDataByMap } from '@utils/index'

function Index() {
  const { data = {}, error = {} } = useSwr('/api/home', fetcher)

  const [recipeList, setRecipeList] = useState([])
  const [activeVideoCard, setActiveVideoCard] = useState(-1)

  const onFilterChange = function (curFilter) {
    const filteredList = filterDataByMap(curFilter, data.items)
    console.log({ filteredList })
    setRecipeList([...filteredList])
  }

  useEffect(() => {
    if (Object.keys(data).length) {
      setRecipeList(data?.items || [])
    }
  }, [data])

  return (
    <Container maxWidth="lg">
      <PrimaryHeading text="Favorite Recipes" />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography align="center" fontSize={32} fontWeight={700}>
          Total: {recipeList.length}
        </Typography>
        <Filter onFilterChange={onFilterChange} />
      </Box>
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
          {recipeList.length === 0 && (
            <Box
              sx={{
                display: 'flex',
                height: '80vh',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography>There are no recipes to display!</Typography>
            </Box>
          )}
          {recipeList.map((x, i) => (
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
