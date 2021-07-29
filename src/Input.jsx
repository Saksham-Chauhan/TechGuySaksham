import React from 'react';

const Input = (props) => {
    return (
        <>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">{props.title}</label>
                <input name="phone"
                    value={props.val}
                    onChange={inputEvent}
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="enter your phone number" />
            </div>
        </>
    );
}

export default Input;