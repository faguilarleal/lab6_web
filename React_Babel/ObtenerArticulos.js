function Articulos() { 
    const [listadoArticulos, setListado] = React.useState([])
    const [loading, setLoading] = React.useState(true); // Estado para indicar si se está cargando

    async function llamarAPI() {
        try {
            
            let artics = await fetch('http://127.0.0.1:3000/blogs')
            let articulos = await artics.json()
            console.log(articulos[0])
            setListado(articulos) // Actualiza el estado de listadoArticulos con los datos obtenidos
            setLoading(false) // cambia el estado de loading a false
        }
        catch (e) {
            console.error("Error al cargar datos de la API",e)
            setLoading(false) // cambia el estado de loading a false
        }
           
    }

    React.useEffect(() => {
        llamarAPI()
    }, [])

    // Condición para mostrar un estado vacío cuando no hay publicaciones
    if (loading) {
        console.log("Cargando...")
         // Muestra un mensaje de carga mientras se obtienen los datos
        return <div><img src='https://media.tenor.com/NqKNFHSmbssAAAAi/discord-loading-dots-discord-loading.gif' alt = 'GIF' style={{width:'100px', heigth:'100px'}}></img></div>;
    } else if (listadoArticulos.length === 0) {
        return <div><img src='https://media.tenor.com/TlEiCCBTkNUAAAAi/alice-waiting.gif'></img>No hay publicaciones</div>; // Muestra un mensaje de estado vacío
    }


    return (    
        <div>
        <h1>Listado de Artículos</h1>
       
            {listadoArticulos.map(articulo => {
                    return <div key={articulo.id}>
                    <Cards title = {articulo.title}/>
                    <h2>{articulo.title}</h2>
                    <p>{articulo.content}</p>
                </div>
                }  
                )}  
    </div>
    )
}