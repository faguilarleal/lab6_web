function Cards(props) { 
    return (
        <div style={{
            // valido si viene la variable width de lo contrario un valor por defecto
            width: props.width ? props.width : "400px",
            height: props.tamanio,
            backgroundColor: 'purple',
            border: '2px solid black',
            color: 'white'
        }}>
            {props.title}
        </div>
    );
}
