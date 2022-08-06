import React, { createContext, useState } from 'react'
import { IData } from '../types/shared';
import { images } from '../constants';

// Types for global state. Context is used to avoid prop drilling in react components. 
interface AppContextInterface {
    data: IData[]

}

// Interface for children prop, in order to render reusable components 
interface IProvider{
   children: React.ReactNode
}

const MainContext = createContext({} as AppContextInterface)

// Mock DataBase
const Data = [
  {
    id: 3435,
    dayAndTime: 'Понедельник 15.06.20 | 15:30',
    hospital: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorRef:{
      name:'Малушко Т. Н.',
      field: 'Хирургия',
      image: images.doctor1
    }
  },
   {
    id: 34765,
    dayAndTime: 'Понедельник 15.06.20 | 18:30 ',
    hospital: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorRef: {
      name:'Харьков В. С.',
      field: 'Терапевтическое отделение',
      image: images.doctor2
    }
  },
  {
    id: 1111,
    dayAndTime: 'Понедельник 15.06.20 | 18:30 ',
    hospital: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorRef: {
      name:'Харьков В. С.',
      field: 'Терапевтическое отделение',
      image: images.doctor1
    }
  },
  {
    id: 5555,
    dayAndTime: 'Понедельник 15.06.20 | 18:30 ',
    hospital: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorRef: {
      name:'Харьков В. С.',
      field: 'Терапевтическое отделение',
      image: images.doctor1
    }
  },
  {
    id: 8888,
    dayAndTime: 'Понедельник 15.06.20 | 18:30 ',
    hospital: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    doctorRef: {
      name:'Харьков В. С.',
      field: 'Терапевтическое отделение',
      image: images.doctor1
    }
  },
]

export const MainProvider = ({children}:IProvider) => {
     const [data, setData] = useState<IData[]>(Data)    

    return (
        <MainContext.Provider value={{ 
         data,
         }}> {children} </MainContext.Provider>
    )

}

export default MainContext 