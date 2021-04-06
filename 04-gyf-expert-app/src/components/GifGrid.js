import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [imagen, setImagen] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async() => {
        
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=cA4zJcSSxIDzIIjM0AjqZqnPVJTHae71&q=comedia&limit=10'
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url //El signo ? pregunta si existe el atributo
            }
        } )

        console.log(gifs);

        setImagen(gifs);
    }

    

    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
            {
                imagen.map( img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ) )
            }
        
        </div>
        </>
    )
}