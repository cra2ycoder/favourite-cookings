import useSwr from 'swr'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import CustomCard from '@components/Card'
import { SecondaryHeading } from '@components/Base/Typography'
import Breadcrumbs from '@components/Base/Breadcrumbs'
import { fetcher } from '@utils/index'

function DynamicPage() {
  const { asPath = '', pathname = '' } = useRouter()
  const { data = [], error = {} } = useSwr(`/api${asPath}`, fetcher)

  return (
    <Container maxWidth="lg">
      <SecondaryHeading text={asPath} />
      <Breadcrumbs links={['home', asPath]} />
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
