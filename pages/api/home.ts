export default async function handler(req, res) {
  if (req.method === 'GET' && !req.url.includes('favicon.ico')) {
    console.log(req.url)

    const results = await fetch(
      // 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=PLTePkUcpu5A4PCt_O9V9X1B_XCviJCCFy&key=AIzaSyCaw1C_dhNQ18bz_rBB-3aQhLzkRjB2VZ8',
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=PLTePkUcpu5A4PCt_O9V9X1B_XCviJCCFy&key=AIzaSyCaw1C_dhNQ18bz_rBB-3aQhLzkRjB2VZ8',
      { method: 'GET' }
    )
      .then(x => x.json())
      .catch(err => {
        console.log('youtube api error', err)
        res.status(403).json({
          error: 'youtube api error!',
        })
      })

    res.send(results)
  }
}
