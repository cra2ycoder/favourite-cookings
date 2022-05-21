const knownList = [
  {
    title: 'Vegetarian',
    desc: 'Vegetarian list',
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370',
    cta: '/vegetarian',
  },
  {
    title: 'Non-Vegetarian',
    desc: 'Non-Vegetarian List',
    url: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335',
    cta: '/non-veg',
  },
  {
    title: 'Juices',
    desc: 'Juices List',
    url: 'https://images.unsplash.com/photo-1551198297-094dd136d3e9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370',
    cta: '/juice',
  },
  {
    title: 'Salads',
    desc: 'Salads List',
    url: 'https://images.unsplash.com/photo-1537785713284-0015ce8a145c?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370',
    cta: '/salads',
  },
  {
    title: 'Fast Foods',
    desc: 'Fast foods list',
    url: 'https://images.unsplash.com/photo-1441986060468-324610e6e6a8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370',
    cta: '/fast-foods',
  },
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(knownList)
  }
}
