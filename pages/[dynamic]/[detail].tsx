import useSwr from 'swr'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import DetailList from '../../components/DetailList'
import { fetcher } from '../../utils'

export default function Detail() {
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
      <Box>
        <Box>
          <CardMedia component="img" height="240" image={data.url} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          {Object.keys(data).map(key => {
            const val = data[key]
            const skipList = ['url', 'name']

            return (
              <Box flexWrap={'nowrap'} marginBottom={'1rem'}>
                {!skipList.includes(key) && (
                  <Typography
                    align="center"
                    fontSize={18}
                    style={{
                      display: 'inline-block',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      textDecoration: 'underline',
                    }}
                  >
                    {key}:
                  </Typography>
                )}
                {typeof val === 'string' && !skipList.includes(key) && (
                  <Typography
                    align="center"
                    style={{ display: 'inline-block', marginLeft: '1rem' }}
                  >
                    {val}
                  </Typography>
                )}
                {typeof val === 'object' && <DetailList data={val} />}
              </Box>
            )
          })}
        </Box>
      </Box>
    </Container>
  )
}
