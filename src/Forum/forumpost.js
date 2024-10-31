import React, { useState } from 'react';
import axios from 'axios';
import "./forum.css"

function PostForm() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/foru', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                console.log('Forum content saved successfully');
            } else {
                console.error('An error occurred while saving the forum content');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className='createforum'>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required></textarea>
                <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;
