import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, nome: "Danilo"},
    {id: 2, nome: "Zeni"},
    {id: 3, nome: "Dev"},
  ]

  return response.json(users)
}