import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createTruck } from "../../../actions/truckAction";

const TruckForm = ({closeForm}) => {    
    const dispatch = useDispatch();
    const initialState = {cap: 0, load: 0}
    const [formData, setForm] = useState(initialState);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTruck(formData))
        clearForm();
        closeForm();
    }

    const handleChange = (e) => {
        setForm({...formData, [e.target.name]: e.target.value || e.value});
    }

    const clearForm = () => {
        setForm(initialState);
    };

    return (
    <><div className="border border-primary p-3">
        <p className="h2 text-center">Location Information</p>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="x">Sức chứa tối đa</label>
                <input type="text" className="form-control"
                name="cap" value={formData.cap} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="x">Sức chứa hiện tại</label>
                <input type="text" className="form-control"
                name="load" value={formData.load} onChange={handleChange}/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary mx-5" >Submit <i className="fa fa-paper-plane"></i></button>
            <button type="reset" className="btn btn-danger" onClick={clearForm}>Clear <i className="fa-solid fa-trash"></i></button>
        </form>
    </div></>
    );
}

export default TruckForm;