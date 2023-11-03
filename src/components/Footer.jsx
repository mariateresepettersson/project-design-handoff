import { useTranslation } from "react-i18next";
import HoverCard from "./HoverCard"; // Add the file extension

const Footer = () => {
    const { t, i18n } = useTranslation();

    // Function to change the language of the website
    const changeLanguageFunction = (lng) => {
        i18n.changeLanguage(lng);
    }

    // Function to handle the change of language using the value of the select element in a dropdown menu
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        changeLanguageFunction(selectedLanguage);
    }

    return (
        <footer>
            <div>
                <h2>{t("homePage.footer.paragraph")}</h2>
            </div>
            <div className="language-dropdown">
                <select onChange={handleLanguageChange} value={i18n.language}>
                    <option value="en">English</option>
                    <option value="se">Swedish</option>
                    <option value="no">Norwegian</option>
                    <option value="da">Danish</option>
                    <option value="pt">Portuguese</option>
                    <option value="mk">Macedonian</option>
                </select>
                <HoverCard />
            </div>
        </footer>
    );
}

export default Footer;
