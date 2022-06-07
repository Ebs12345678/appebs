import React from "react";
import { useState, useEffect } from "react";

const Contact = () => {

    const [formvalue, setFormvalue] = useState({ name: "", email: "", url: "", message: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formerror, setFormerror] = useState({});

    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormerror(validationform(formvalue));
        setIsSubmitted(true);
    }
    const validationform = (formvalue) => {
        const error = {};
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (formvalue.name === "") {
            error.name = "Name is required";
        }
        if (formvalue.email === "") {
            error.email = "Email is required";
        }
        else if (!emailPattern.test(formvalue.email)) {
            error.email = "Email is not valid";
        }
        if (formvalue.url === "") {
            error.url = "Url is required";
        }
        if (formvalue.message === "") {
            error.message = "Message is required";
        }
        return error;
    }
    useEffect(() => {
        if (Object.keys(formerror).length === 0 && isSubmitted) {
            console.log(formvalue)
        }
    }, [formerror, formvalue, isSubmitted])

    return (
        <>
            <div className="cnt-hd-blk">
                <div className="container-fluid cnt-hd-img">
                    <a className="cnt-hd-tlt">contact us</a>
                </div>
            </div>
            <div className="cnt-blk">
                <div className="container cnt-body-blk">
                    <div className="row">
                        <div className="col-md-6">
                            <form className="con-form" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        value={formvalue.name}
                                        onChange={handleValidation}
                                    />
                                    <span className="text-danger">{formerror.name}</span>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        Email address
                                    </label>

                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="email"
                                        className="form-control"
                                        value={formvalue.email}
                                        onChange={handleValidation}
                                    />
                                    <span className="text-danger">{formerror.email}</span>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        Tel.
                                    </label>

                                    <input
                                        type="text"
                                        name="tel"
                                        placeholder="telephone no."
                                        className="form-control"
                                        value={formvalue.tel}
                                        onChange={handleValidation}
                                    />
                                    <span className="text-danger">{formerror.tel}</span>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        Website 
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="url"
                                        placeholder="website"
                                        value={formvalue.url}
                                        onChange={handleValidation}
                                    />
                                    <span className="text-danger">{formerror.url}</span>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="message"
                                        value={formvalue.message}
                                        onChange={handleValidation}
                                        rows="3"
                                    ></textarea>
                                    <span className="text-danger">{formerror.message}</span>
                                </div>
                                <button type="submit" className="btn-success" name="button">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-6  cnt-map-blk">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;