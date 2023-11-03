import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SignupForm() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '', // Rename "name" to "firstName"
    lastName: '', // Add a "lastName" field
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('First Name:', formData.firstName);
    console.log('Last Name:', formData.lastName);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{t('homePage.formSection.firstName')}</label>
        <input
          type="text"
          name="firstName" // Change the name attribute to "firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>{t('homePage.formSection.lastName')}</label>
        <input
          type="text"
          name="lastName" // Add a unique name attribute "lastName"
          value={formData.lastName} // Use formData.lastName
          onChange={handleChange}
        />
      </div>
      <div>
        <label>{t('homePage.formSection.email')}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{t('homePage.formSection.button')}</button>
    </form>
  );
}

export default SignupForm;
