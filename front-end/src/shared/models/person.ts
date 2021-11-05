export interface Person {
  id: number
  first_name: string
  last_name: string
  photo_url?: string
}

export interface Sort {
  firstName : boolean,
  ascending : boolean
}

export const PersonHelper = {
  getFullName: (p: Person) => `${p.first_name} ${p.last_name}`,
}
