import React, { createContext, useContext, useState } from 'react'
import { IBill } from '../../interfaces/Bills/IBill';

interface BillContextType {
  billData: IBill[];
  setBillData: React.Dispatch<React.SetStateAction<IBill[]>>;
}

const defaultBillContext: BillContextType = {
  billData: [],
  setBillData: () => { },
};

const BillContext = createContext(defaultBillContext);

export const BillsProvider = ({ children }: any) => {

  const testData: IBill[] = [
    {
      name: 'Cuentas con Paposhis',
      state: 'pending'
    },
    {
      name: 'Cumple Valen V',
      state: 'pending'
    },
    {
      name: 'Cumple Vanesa',
      state: 'solved'
    },
  ]

  const [billData, setBillData] = useState<IBill[]>(testData);

  return (
    <BillContext.Provider value={{ billData, setBillData }}>
      {children}
    </BillContext.Provider>
  )
}

export const useBills = () => {
  return useContext(BillContext)
}