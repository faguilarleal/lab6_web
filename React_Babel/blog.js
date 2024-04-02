function Blog(props) {
  return (
    document.getElementById("master").style.width = '100%',
    document.getElementById("master").style.height = '100%',
    document.body.style.margin = 0,
    // document.body.style.backgroundColor = 'purple',
    // <div>
    //     <Articulos/>
    // </div>
    <div id = "layout" style={{display:'grid', backgroundColor:'white', gridTemplateRows:'10% 50% 40%'}}>
        <Header/>
        <Content/>
        <Articulos/>
    </div>
  );
}