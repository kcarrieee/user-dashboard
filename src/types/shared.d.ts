export type DocRef = {
    name: string
    field: string
    image: string
}

export interface IData{
  id: number
  dayAndTime: string
  hospital: string
  doctorRef: DocRef
}