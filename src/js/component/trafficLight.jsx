import React, {useState} from "react"

const TrafficLight = () =>{

    const semaforoStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        border: 'none', 
        margin: '10px', 
        fontSize: '16px', 
        color: 'white', 
        cursor: 'pointer',
    };

    
    const [redLight, changeRedLight] = useState("grey");
    const [yellowLight, changeYellowLight] = useState("grey");
    const [greenLight, changeGreenLight] = useState("grey");
    
    function LightRed (){
        if (redLight == "grey"){
            changeRedLight("red")
            changeYellowLight ("grey")
            changeGreenLight("grey")
        }
        else {
            changeRedLight ("grey")
            
        }
            
    }; 

    function LightYellow (){
        if (yellowLight == "grey"){
            changeYellowLight("orange")
            changeRedLight ("grey")
            changeGreenLight ("grey")
        }
        else {
            changeYellowLight ("grey")
        }
            
    }; 

    function LightGreen (){
        if (greenLight == "grey"){
            changeGreenLight("green")
            changeYellowLight ("grey")
            changeRedLight ("grey")
        }
        else {
            changeGreenLight ("grey")
        }
            
    }; 
    
    return <>
        <div className =" d-flex semaforocontainer justify-content-center align-items-center" style={{ backgroundColor: 'black', width: '200px', height: "500px", borderRadius :"30px" }} >
            <div className="d-flex flex-column justify-content-end semaforo">
                <button style = {{...semaforoStyle ,backgroundColor:redLight, boxShadow: redLight === "red" ? "0px 0px 20px 15px red" : "none"}} onClick={LightRed}></button>
                <button style = {{...semaforoStyle, backgroundColor:yellowLight, boxShadow: yellowLight === "orange" ? "0px 0px 20px 15px orange" : "none"}} onClick={LightYellow}></button>
                <button style = {{...semaforoStyle, backgroundColor:greenLight, boxShadow: greenLight === "green" ? "0px 0px 20px 15px green" : "none"}} onClick={LightGreen}></button>
            </div>
        </div>
    </>
};


export default TrafficLight;