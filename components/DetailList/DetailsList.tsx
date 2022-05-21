import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function DetailList(props) {
  return (
    <Box>
      {props.data?.map(x => {
        return (
          <Box marginBottom={'1rem'} paddingLeft={'1rem'}>
            <Typography>{x.title}</Typography>
            <Typography variant="body2">{x.usage}</Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export { DetailList }
export default DetailList
