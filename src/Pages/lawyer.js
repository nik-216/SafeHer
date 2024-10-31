import React from 'react';
import './lawyer.css';
function LawyersPage() {
    const lawyers = [
        {
            id: 1,
            name: 'Priya Sharma',
            email: 'priya.sharma@example.com',
            phone: '123-456-7890',
            expertise: 'Women Harassment Law',
            description: 'Priya Sharma is a seasoned lawyer with expertise in handling women harassment cases. With a compassionate approach and attention to detail, she provides legal support to women facing harassment in various aspects of their lives.'
        },
        {
            id: 2,
            name: 'Rahul Kapoor',
            email: 'rahul.kapoor@example.com',
            phone: '987-654-3210',
            expertise: 'Gender Discrimination Law',
            description: 'Rahul Kapoor is dedicated to advocating for gender equality and fighting against gender-based discrimination. With extensive experience in gender discrimination law, he provides legal representation and support to victims of harassment and discrimination.'
        },
        {
            id: 3,
            name: 'Neha Patel',
            email: 'neha.patel@example.com',
            phone: '456-789-0123',
            expertise: 'Sexual Harassment Law',
            description: 'Neha Patel is a dedicated advocate for victims of sexual harassment. With a strong background in sexual harassment law, she provides legal counsel and support to individuals navigating through difficult situations.'
        },
        {
            id: 4,
            name: 'Siddharth Desai',
            email: 'siddharth.desai@example.com',
            phone: '789-012-3456',
            expertise: 'Workplace Harassment Law',
            description: 'Siddharth Desai specializes in workplace harassment cases and is committed to ensuring a safe and respectful work environment for all. He offers legal representation and guidance to employees facing harassment at their workplace.'
        },
        {
            id: 5,
            name: 'Ananya Mishra',
            email: 'ananya.mishra@example.com',
            phone: '012-345-6789',
            expertise: 'Domestic Violence Law',
            description: 'Ananya Mishra is passionate about protecting victims of domestic violence and providing them with the legal support they need. With expertise in domestic violence law, she helps individuals seek justice and safety.'
        },
        {
            id: 6,
            name: 'Aaradhya Gupta',
            email: 'aaradhya.gupta@example.com',
            phone: '321-654-9870',
            expertise: 'Harassment and Discrimination Law',
            description: 'Aaradhya Gupta specializes in handling cases related to harassment and discrimination. With a compassionate approach and strong advocacy skills, she is dedicated to helping clients achieve justice and fair treatment.'
        }
    ];

    return (
        <div className="lawyers-page">
            <div className="lawyers">
                <h1>Meet Our Lawyers Specialized in Women Harassment Cases</h1>
                <div className="lawyers-list">
                    {lawyers.map(lawyer => (
                        <div key={lawyer.id} className="lawyer-card">
                            <h3>{lawyer.name}</h3>
                            <p><strong>Email:</strong> {lawyer.email}</p>
                            <p><strong>Phone:</strong> {lawyer.phone}</p>
                            <p><strong>Expertise:</strong> {lawyer.expertise}</p>
                            <p>{lawyer.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LawyersPage;
