import "./App.css";
function Frutaitem( {nome, quantidade} ){
        const FrutaStyle = {
            border: "1px solid black",
        backgroundColor: "yellow"
    }
    
    return(
        <div className="fruta" style={FrutaStyle}>
            Fruta {nome} - quantidade: {quantidade}
        </div>
    )
}

export default Frutaitem;