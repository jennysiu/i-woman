// INTERNAL IMPORTS
import networkImg from "../../public/assets/images/network-img.jpg";

const About = () => {
  return (
    <>
      <header>
        <h1>About Us</h1>
        <h2>The women's social business networking platform</h2>
      </header>

      <p className="about-us-para">
        i-woman, a social/business media platform for women and everyone that
        creates an inclusive culture to successfully harness entrepreneurs,
        women empowerment, and leaders to reach their potential to truly
        transform society. The platform is designed to bring women from all
        industries, whether you are starting up or want to further your career
        development. It will act as an innovative platform where women in all
        fields can come together and discuss their ideas, doubts and queries.
        All members will be able to choose the topic of their interests and
        connect with others having similar ideas. They will be able to share
        their knowledge by uploading articles, creating posts and reaching out
        to other members directly.
      </p>

      <img src={networkImg} className="about-img"></img>
    </>
  );
};

export default About;
