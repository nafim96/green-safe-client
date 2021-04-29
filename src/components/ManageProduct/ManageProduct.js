import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ManageDetails from '../ManageDetails/ManageDetails';
import ProgressBar from '../ProgressBar/ProgressBar';

const ManageProduct = () => {
    const[manage, setManage]=useState([])
    const url=`https://green-safe.herokuapp.com/trees`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setManage(data)
        })
    },[])
    return (
        <div>
            <div>
                <Header></Header>
                <div className="mt-5 mb-3">
                    {
                        manage.length===0 && <ProgressBar></ProgressBar>
                    }
                    <h2>Manage Product</h2>
                    {
                        manage.map(tree=> <ManageDetails key={tree._id} trees={tree}></ManageDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;