const vegetables = [
  {
    title: 'veg pulavu',
    desc: '',
    url: '',
    cta: '/vegetarian/veg-pulavu',
  },
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    console.log(req.url)
    res.status(200).json(vegetables)
  }
}
