const knownList = [
  {
    title: 'Vegetarian',
    desc: 'Vegetarian list',
    url: '',
    cta: '/vegetarian',
  },
  {
    title: 'Non-Vegetarian',
    desc: 'Non-Vegetarian List',
    url: '',
    cta: '/non-veg',
  },
  {
    title: 'Juices',
    desc: 'Juices List',
    url: '',
    cta: '/juice',
  },
  {
    title: 'Salads',
    desc: 'Salads List',
    url: '',
    cta: '/salads',
  },
  {
    title: 'Fast Foods',
    desc: 'Fast foods list',
    url: '',
    cta: '/fast-foods',
  },
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(knownList)
  }
}
