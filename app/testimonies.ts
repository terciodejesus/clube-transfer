export type TestimonyType = {
  username: string
  stars: number
  publishedAt: string
  testimony: string
}

export const testimonies = [
  {
    username: 'Elaine',
    stars: 5,
    publishedAt: 'jan/2023',
    testimony:
      'Fizemos o transfer Salvador-Costa do Sauípe, com City Tour por Salvador na ida e passeio na Praia do Forte na volta. Ficamos muito satisfeitos, os motoristas muito atenciosos e prestativos.',
  },
  {
    username: 'Rosita A.',
    stars: 5,
    publishedAt: 'ago/2022',
    testimony:
      'O Samuel nos atendeu muito bem! Uma simpatia de pessoa, atendimento top, preço justo e veículo extremamente confortável. Super pontual e organizado. Com certeza fez a nossa viagem mais proveitosa.',
  },
  {
    username: 'Ana G.',
    stars: 5,
    publishedAt: 'jul/2022',
    testimony:
      'Motoristas qualificados e simpáticos. Veículos limpos e com cadeirinhas para as crianças. Pontualidade na chegada e na saída. O melhor preço que encontrei na região. Estão de parabéns!',
  },
] as TestimonyType[]
