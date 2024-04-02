function Header(){
    return (
        <div id = "header" style={{
            // backgroundColor:'green', 
            width:'100%', height:"100%", 
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            borderBottom: '0.5px solid black'
            }}>

            <div id="texto" style={{
                marginBottom: '32px',
                fontFamily: 'Romie-Regular',
                fontSize: '60px',
                lineHeight: '60px',
                letterSpacing: '-4px',
                paddingTop: '0',
                marginBottom: '10px',
                color: 'rgb(0, 0, 0)',
                textAlign: 'center'
            }}>Taylor Swift Blog</div>
        </div>
    );
}