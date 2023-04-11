
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createEmp } from "../../../actions/empsAction"

const EmpForm = () => {
    const [empData, setEmpData] = useState({
        fname:'', email:'', address:'', id: '',
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch();
        clear();
    }

    const clear = () => {
        setEmpData({fname:'', email:'', address:'', id: ''});
    };

    return (
    <>
        <h1>Employee Form</h1>
        <form autoComplete='off' onSubmit={handleSubmit} style={{width:"50vw"}}>
            <div className="form-group">
                <label htmlFor="exampleName">Name</label>
                <input type="text" className="form-control" id="exampleName" 
                value={empData.fname} onChange={(e) => setEmpData({ ...empData, fname: e.target.value })}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleMail">Email</label>
                <input type="email" className="form-control" id="exampleMail"
                value={empData.email} onChange={(e) => setEmpData({ ...empData, email: e.target.value })}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleAdd">Address</label>
                <input type="text" className="form-control" id="exampleAdd"
                value={empData.address} onChange={(e) => setEmpData({ ...empData, address: e.target.value })}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleID">ID</label>
                <input type="text" className="form-control" id="exampleID"
                value={empData.id} onChange={(e) => setEmpData({ ...empData, id: e.target.value })}/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="clear" className="btn btn-danger mx-3" onCLick={clear}>Clear</button>
        </form>
    </>
    );
}

export default EmpForm;