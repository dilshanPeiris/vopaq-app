import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import contactFormStyles from './styles/contact-form.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        groupOrCompany: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (

        <div className={`container col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 ${contactFormStyles.formContainer}`}>
            <div className={contactFormStyles.formTitle}>Have a project in mind?</div>
            <form className={contactFormStyles.formComponent} onSubmit={handleSubmit}>
                <div className={contactFormStyles.formGroup}>
                    <input className={contactFormStyles.formInput}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input className={contactFormStyles.formInput}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className={contactFormStyles.formGroup}>
                    <input className={contactFormStyles.formInput}
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input className={contactFormStyles.formInput}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={contactFormStyles.formGroup}>
                    <input className={contactFormStyles.textarea}
                        type="text"
                        name="groupOrCompany"
                        placeholder="Group or Company"
                        value={formData.groupOrCompany}
                        onChange={handleChange}
                    />
                </div>
                <div className={contactFormStyles.formGroup}>
                    <textarea className={contactFormStyles.textarea}
                        name="message"
                        placeholder="Your Message..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className={contactFormStyles.submitButton}>
                    <button className={contactFormStyles.button} type="submit">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;
