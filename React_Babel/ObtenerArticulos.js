function Articulos() { 
    const [listadoArticulos, setListado] = React.useState([])
    const [loading, setLoading] = React.useState(true); // Estado para indicar si se está cargando

    async function llamarAPI() {
        // try {
            
        //     let artics = await fetch('http://127.0.0.1:3000/blogs')
        //     let articulos = await artics.json()
        //     console.log(articulos[0])
        //     setListado(articulos) // Actualiza el estado de listadoArticulos con los datos obtenidos
        //     setLoading(false) // cambia el estado de loading a false
        // }
        // catch (e) {
        //     console.error("Error al cargar datos de la API",e)
        //     setLoading(false) // cambia el estado de loading a false
        // }
           
        let artics = await fetch('http://127.0.0.1:3000/blogs')
        let articulos = await artics.json()
        console.log(articulos[0])
        setListado(articulos) // Actualiza el estado de listadoArticulos con los datos obtenidos
        setLoading(false) // cambia el estado de loading a false
    }

    React.useEffect(() => {
        llamarAPI()
    }, [])

    // Condición para mostrar un estado vacío cuando no hay publicaciones
    if (loading) {
        console.log("Cargando...")
        return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    } else if (listadoArticulos.length === 0) {
        return <div>No hay publicaciones disponibles</div>; // Muestra un mensaje de estado vacío
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