import React, { useRef } from 'react';

const UseRef = () => {
    const username = useRef(null);
    const password = useRef(null);
    const imageRef = useRef()
    console.log(imageRef)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Username:", username.current.value);
        console.log("Password:", password.current.value);

    }

    if (imageRef.current && imageRef.current.files.length > 0) {
        const file = imageRef.current.files[0];
        console.log("Selected File:", file);
        // You can read the file content using FileReader if needed
        const reader = new FileReader();
        reader.onload = () => {
            console.log("File Content:", reader.result); // This will log the file's content (e.g., as a data URL for images)
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    } else {
        console.log("No file selected");
    }


return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" ref={username} />
            <input type="password" name="password" ref={password} />
            <button type='submit'>Submit</button>
        </form>

        <div>
            <input type="file" name="image" ref={imageRef} style={{ display: "none" }} />
            <button onClick={() => {
                imageRef.current.click()
                console.log(imageRef)
            }} style={{ background: "green" }} > open file</button>
        </div>
    </div>
)

};


export default UseRef;
