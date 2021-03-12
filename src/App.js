import Contact from "./component/Contact/Contact";
import Copyright from "./component/Copyright/Copyright";
import Experience from "./component/Experience/Experience";
import Education from "./component/Experience/Experience";
import Header from "./component/Header/Header";
import Hello from "./component/Hello/Hello";
import Portfolio from "./component/Portfolio/Portfolio";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import Skills from "./component/Skills/Skills";
import MessengerCustomerChat from "react-messenger-customer-chat";

const leftDescription =
  "I patner with startups, organizations and Client with directly, through Company or Freelancing sites to build digital product that help cilent overcome challanges and create lasting connections with millions of people every day which overall help them to gain or assets the Business";

const rightTopDescription =
  " Designed and Developed user-friendly website and Applications, including Security and Performance point of view";
const leftEducationDescription =
  "All my life I have been driven by my strong belief that education is important. I try to learn something new every single day. I feel that the more knowledge you have the more you realize how much you don't know.";

const rightTopEducationDescription =
  "Learned All the Aspects of Object oriented Programming language and Java elements with all it's Framework, Dependency, Libraries (Spring MVC, Spring Boot, Hibernate, Java Swing).";

function App() {
  return (
    <div id="intro">
      <MessengerCustomerChat
        pageId="100972251759163"
        appId="1012992322500389"
      />
      <Header />
      <Hello />
      <Skills />
      <Experience
        leftTitle="Experience"
        leftDescription={leftDescription}
        rightTopTitle="Java Developer"
        rightTopBadge="Policy Nepal"
        rightTopYear="2018-2019"
        rightTopDescription={rightTopDescription}
        rightBottomTitle="Freelancers"
        rightBottomBadge="Upwork and Other Platform"
        rightBottomYear="2020-Present"
        showLink
        id="experience"
      />
      <Education
        leftTitle="Education"
        leftDescription={leftEducationDescription}
        rightTopTitle="Professional Java Developer Training"
        rightTopBadge="Broadways Infosys"
        rightTopYear="2018"
        rightTopDescription={rightTopEducationDescription}
        rightBottomTitle="Bsc. Hons. Computing"
        rightBottomBadge="Coventry University"
        rightBottomYear="Completed at 2020"
        id="education"
      />
      <Portfolio />
      <Contact />
      <Copyright />
      <ScrollToTop />
    </div>
  );
}

export default App;
