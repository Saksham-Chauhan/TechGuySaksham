import React, { useState } from 'react';

const Contact = () => {

    const [data,setdata]=useState({
        name:"",
        phone:"",
        email:"",
        message:"",

    });

    const inputEvent = (event) => {
       const {name,value}=event.target;
       setdata((old)=>{
            return {
                ...old,
                [name]:value
            }
       })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            data.name+" "+data.phone+" "+data.email+" "+data.message
        )
    }
    
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form action="#" onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input name="name"
                                value={data.name} 
                                onChange={inputEvent}
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="enter your full name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input name="phone"
                                 value={data.phone} 
                                 onChange={inputEvent}
                                 type="number"
                                 class="form-control"
                                 id="exampleFormControlInput1"
                                 placeholder="enter your phone number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input name="email" 
                                value={data.email} 
                                onChange={inputEvent} 
                                type="email" class="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea name="message" 
                                value={data.message} 
                                onChange={inputEvent} 
                                class="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3">
                                </textarea>
                            </div>
                            <div className="col-12">
                                <input 
                                name="" 
                                // value={} 
                                onChange={inputEvent} 
                                class="btn btn-outline-primary" 
                                type="submit" 
                                value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
