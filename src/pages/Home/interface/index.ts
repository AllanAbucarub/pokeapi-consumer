interface IResult {
  name: string
  url: string
}

export interface IPokemonList {
  count: number
  next: string
  results: IResult[]
}
