import useSwr from 'swr'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CustomCard from '../../components/Card'
import { fetcher } from '../../utils'

function DynamicPage() {
  const { asPath = '', pathname = '' } = useRouter()

  const { data = [], error = {} } = useSwr(`/api${asPath}`, fetcher)

  console.log({ asPath, data })

  return (
    <Container maxWidth="lg">
      <Box padding={2}>
        <Typography align="center" fontSize={72} fontFamily={'inherit'}>
          @{asPath}
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {data?.map((x, i) => (
            <Grid item xs={12} lg={3} md={3} key={`dynamic-list-${i}`}>
              <CustomCard {...x} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export { DynamicPage }
export default DynamicPage
