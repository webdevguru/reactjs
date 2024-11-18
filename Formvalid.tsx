import { useRef } from "react";

const Formvalid=()=>{
    const fnameref=useRef<any>();
    const lnameref=useRef<any>();
    const succfname=useRef<any>();
    const errfname=useRef<any>();
    const succlname=useRef<any>();
    const errlname=useRef<any>();
    const fnamech=()=>{
     if(fnameref.current.value.length<=5){
        succfname.current.innerHTML="";
        fnameref.current.classList.add("is-invalid")
        errfname.current.innerHTML='Error,Name must be 6 or more chereacter';
       

     }
     else{
        fnameref.current.classList.remove("is-invalid")
        fnameref.current.classList.add("is-valid")
        errfname.current.innerHTML="";
        succfname.current.innerHTML="Success";
     }


    }
    const lnamech=()=>{
        if(lnameref.current.value.length<=3){
            succlname.current.innerHTML="";
            lnameref.current.classList.add("is-invalid")
            errlname.current.innerHTML='Error,Name must be 6 or more chereacter';
           
   
         }
         else{
            lnameref.current.classList.remove("is-invalid")
            lnameref.current.classList.add("is-valid")
            errlname.current.innerHTML="";
            succlname.current.innerHTML="Success";
         }

    }
    return(
        <>
        <div className="container">
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <label htmlFor="">First Name</label>
                        <input type="text" name="" id="" className="form-control" ref={fnameref} onKeyUp={fnamech} />
                    <p ref={succfname} style={{color:'green'}}></p>
                    <p ref={errfname} style={{color:'red'}}></p>
                    </div>
                    <div className="col">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="" className="form-control" ref={lnameref} onKeyUp={lnamech} />
                    <p ref={succlname} style={{color:'green'}}></p>
                    <p ref={errlname} style={{color:'red'}}></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Formvalid;