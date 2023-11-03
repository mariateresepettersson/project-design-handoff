import Footer from "../components/Footer";
import { Header } from "../components/Header";
import SignupForm from "../components/SignUpForm";
import { useTranslation } from "react-i18next";


export const Home = () => {
  const { t, i18n } = useTranslation();

    return (
      <div>
        <Header/>
        <h1>{t("homePage.mainSection.secondaryHeading")}</h1>
        <SignupForm />
        <Footer />
      </div>
    );
  };
  