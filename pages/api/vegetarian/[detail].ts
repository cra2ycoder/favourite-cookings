const details = {
  name: 'veg pulavu',
  url: '',
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    console.log(req.url)
    res.status(200).json(details)
  }
}
