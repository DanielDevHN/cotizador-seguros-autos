import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'


const Formulario = () => {
    return (
        <>


            <form>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200 rounded-md 
                    focus:outline-none focus:shadow-outline-gray focus:border-gray-300"
                    >
                        <option value="">-- Seleccione una marca --</option>
                        {MARCAS.map(marca => (
                            <option key={marca.id} value={marca.id}>
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-200 rounded-md 
                    focus:outline-none focus:shadow-outline-gray focus:border-gray-300"
                    >
                        <option value="">-- Seleccione una año --</option>
                        {YEARS.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Plan
                    </label>
                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label className="block text-gray-500 font-bold">
                                    {plan.nombre}
                                </label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input
                    type="submit"
                    value="Cotizar"
                    className="w-full p-3 bg-blue-500 hover:bg-blue-700 transition-colors
                    text-white font-bold uppercase rounded-md cursor-pointer"
                />
            </form>
        </>
    )
}

export default Formulario
