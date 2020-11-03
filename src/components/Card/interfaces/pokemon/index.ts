interface IDreamWorld {
  front_default: string
  front_female?: any
}

interface IOfficialArtwork {
  front_default: string
}

interface IOther {
  dream_world: IDreamWorld
  'official-artwork': IOfficialArtwork
}

interface ISprites {
  other: IOther
}

interface IStat2 {
  name: string
}

export interface IStat {
  base_stat: number
  stat: IStat2
}

interface IType2 {
  name: string
  url: string
}

interface IType {
  slot: number
  type: IType2
}

export interface IPokemon {
  id: number
  name: string
  height: number
  weight: number
  types: IType[]
  sprites: ISprites
  stats: IStat[]
}
