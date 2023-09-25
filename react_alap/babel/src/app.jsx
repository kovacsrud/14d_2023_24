function App(){
    return (
        <div className="container">
            <h1>Babel fordító</h1>
            <p>React alapok, frontend programozás</p>
            <Box felirat={"Box1"} kezd={0} hatterSzin={"red"}/>
            <Box felirat={"Box2"} kezd={4} hatterSzin={"green"}/>
            <Box felirat={"Box3"} kezd={2} hatterSzin={"yellow"}/>
        </div>
    );
}

function Box({hatterSzin,kezd,felirat}){
    const[szamlalo,setSzamlalo]=React.useState(kezd);

    const onClick=()=>{
        setSzamlalo(prev=>prev+1);
    }

    return (
    <div onClick={onClick} className="p-2 m-2 rounded" style={{backgroundColor:hatterSzin,width:"200px",height:"200px"}}>
        <h3>{felirat}</h3>
        <h4>{szamlalo}</h4>
    </div>);
}

ReactDOM.render(React.createElement(App),document.getElementById('app'));