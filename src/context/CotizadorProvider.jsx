import { createContext } from 'react'


const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {
    const [cotizacion, setCotizacion] = useState({})

    const setCotizacionState = (cotizacion) => {
        setCotizacion(cotizacion)
    }

    return (
        <CotizadorContext.Provider /*value={{ cotizacion, setCotizacionState }}*/>
            {children}
        </CotizadorContext.Provider>
    )
}

export { 
    
    CotizadorProvider 
}

export default CotizadorProvider