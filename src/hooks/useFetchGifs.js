import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

// to get the images and loading state
export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // ejecuta el metodo solo si el valor de categoria a cambiado
    useEffect( () => {

        // retorna promesa con imagen
        getGifs( category )
            .then( imgs => {
                
                // carga las imagenes y cambia estado de loading a false
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])
    // funcion solo se ejecuta si  hay cambios en el objeto categoria



    return state; // { data:[], loading: true };


}


