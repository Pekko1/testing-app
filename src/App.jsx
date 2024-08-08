import { useState } from 'react'
import '../src/App.css'

function App(){

    const [string, setString] = useState("")
    const [submited, setSubmited] = useState(false)

    const [valueA , setValueA] = useState(0)
    const [valueB , setValueB] = useState(0)
    const [valueC , setValueC] = useState(0)
    const [valueD , setValueD] = useState(0)
    const [valueE , setValueE] = useState(0)
    const [valueF , setValueF] = useState(0)
    const [valueG , setValueG] = useState(0)
    const [valueH , setValueH] = useState(0)
    const [valueI , setValueI] = useState(0)
    const [valueJ , setValueJ] = useState(0)
    const [valueK , setValueK] = useState(0)
    const [valueL , setValueL] = useState(0)
    const [valueM , setValueM] = useState(0)
    const [valueN , setValueN] = useState(0)
    const [valueO , setValueO] = useState(0)
    const [valueP , setValueP] = useState(0)
    const [valueQ , setValueQ] = useState(0)
    const [valueR , setValueR] = useState(0)
    const [valueS , setValueS] = useState(0)
    const [valueT , setValueT] = useState(0)
    const [valueU , setValueU] = useState(0)
    const [valueV , setValueV] = useState(0)
    const [valueW , setValueW] = useState(0)
    const [valueX , setValueX] = useState(0)
    const [valueY , setValueY] = useState(0)
    const [valueZ , setValueZ] = useState(0)

    function submit(){
        setString("")
        setSubmited(true)
        setValueA(0)
        setValueB(0)
        setValueC(0)
        setValueD(0)
        setValueE(0)
        setValueF(0)
        setValueG(0)
        setValueH(0)
        setValueI(0)
        setValueJ(0)
        setValueK(0)
        setValueL(0)
        setValueM(0)
        setValueN(0)
        setValueO(0)
        setValueP(0)
        setValueQ(0)
        setValueR(0)
        setValueS(0)
        setValueT(0)
        setValueU(0)
        setValueV(0)
        setValueW(0)
        setValueX(0)
        setValueY(0)
        setValueZ(0)

        for(let i=0 ; i<= string.length ; i++){
            switch(string[i]){
                case "A":
                    setValueA((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "B":
                    setValueB((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "C":
                    setValueC((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "D":
                    setValueD((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "E":
                    setValueE((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "F":
                    setValueF((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "G":
                    setValueG((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "H":
                    setValueH((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "I":
                    setValueI((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "J":
                    setValueJ((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "K":
                    setValueK((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "L":
                    setValueL((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "M":
                    setValueM((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "N":
                    setValueN((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "O":
                    setValueO((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "P":
                    setValueP((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "Q":
                    setValueQ((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "R":
                    setValueR((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "S":
                    setValueS((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "T":
                    setValueT((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "U":
                    setValueU((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "V":
                    setValueV((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "W":
                    setValueW((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "X":
                    setValueX((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "Y":
                    setValueY((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                case "Z":
                    setValueZ((oldValue)=>{
                        return oldValue + 1
                    })
                    break
                
            }
        }
    }
    
    return(
        <>
        <input
        type="text" 
        placeholder='inserisci la stringa' 
        value={string} 
        onChange={(e)=>{setString(e.target.value)}}/>
        <button onClick={submit}>invia</button>
        {submited? (
            <ul>
                {valueA>0 ? <li>A:{valueA}</li> : null}
                {valueB>0 ? <li>B:{valueB}</li> : null}
                {valueC>0 ? <li>C:{valueC}</li> : null}
                {valueD>0 ? <li>D:{valueD}</li> : null}
                {valueE>0 ? <li>E:{valueE}</li> : null}
                {valueF>0 ? <li>F:{valueF}</li> : null}
                {valueG>0 ? <li>G:{valueG}</li> : null}
                {valueH>0 ? <li>H:{valueH}</li> : null}
                {valueI>0 ? <li>I:{valueI}</li> : null}
                {valueJ>0 ? <li>J:{valueJ}</li> : null}
                {valueK>0 ? <li>K:{valueK}</li> : null}
                {valueL>0 ? <li>L:{valueL}</li> : null}
                {valueM>0 ? <li>M:{valueM}</li> : null}
                {valueN>0 ? <li>N:{valueN}</li> : null}
                {valueO>0 ? <li>O:{valueO}</li> : null}
                {valueP>0 ? <li>P:{valueP}</li> : null}
                {valueQ>0 ? <li>Q:{valueQ}</li> : null}
                {valueR>0 ? <li>R:{valueR}</li> : null}
                {valueS>0 ? <li>S:{valueS}</li> : null}
                {valueT>0 ? <li>T:{valueT}</li> : null}
                {valueU>0 ? <li>U:{valueU}</li> : null}
                {valueV>0 ? <li>V:{valueV}</li> : null}
                {valueW>0 ? <li>W:{valueW}</li> : null}
                {valueX>0 ? <li>X:{valueX}</li> : null}
                {valueY>0 ? <li>Y:{valueY}</li> : null}
                {valueZ>0 ? <li>Z:{valueZ}</li> : null}
            </ul>
        ):(
            null
        )}
        </>
    )
}

export default App