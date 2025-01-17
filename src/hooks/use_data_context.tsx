import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"

type DataContextType<T> = {
  data: T
  setData: Dispatch<SetStateAction<T>>
}

export const DataContext = createContext<DataContextType<any> | undefined>(
  undefined
)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState({})

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = <T extends object>() => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider")
  }
  return context as {
    data: T
    setData: React.Dispatch<React.SetStateAction<T>>
  }
}
