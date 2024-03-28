/* eslint-disable react/no-unescaped-entities */
// src/components/Bio.js
import { FaReact, FaNodeJs, FaAngular, FaPython, FaCss3Alt, FaWordpress, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import {  AiOutlineAntDesign } from 'react-icons/ai';

import './Bio.css';
function Bio() {
    return (
      <div className="bio-container">
        <h1 className="text-4xl font-bold">About Me - Hafiz Hassan</h1>
        <p className="mt-4">
          I am an ambitious IT professional with a keen interest in the intersection of technology and business. My journey began with a fascination for how software can solve real-world problems, leading me to pursue a career that balances technical acumen with strategic business insights.
        </p>
  
        <h2 className="text-3xl font-bold mt-6">Passion for Technology and Problem Solving</h2>
        <p className="mt-4">
          My passion lies in understanding complex challenges and devising innovative solutions. Whether it's enhancing software quality, exploring the potentials of AI, or developing scalable web applications, I thrive on the opportunity to make a tangible impact. My approach to problem-solving is methodical and data-driven, yet creative and adaptable to the needs of each unique scenario.
        </p>
  
        <h2 className="text-3xl font-bold mt-6">Educational Background</h2>
<div className="mt-4">
  <strong>IU Applied Sciences (Germany, Online - Part-time)</strong> February 2024 – January 2025<br/>
  <em>MS Applied Artificial Intelligence</em><br/>
  Key Modules: Deep Learning, Machine Learning, Natural Language Processing, Cloud Computing, Network Security.<br/><br/>

  <strong>University of Hertfordshire (Hatfield)</strong> September 2021 – October 2023<br/>
  <em>MSc International Business with Advanced Research</em><br/>
  Key Modules: The Global Economy, International Business Strategy, Professional and Consultancy Skills, International Business Strategy, International and Comparative HRM.<br/><br/>

  <strong>IBIT, University of The Punjab (Pakistan)</strong> September 2016 – October 2020<br/>
  <em>BS (Hons) Business and Information Technology</em><br/>
  Key Modules: Database Management, Object-Oriented Programming, Information Systems Audit and Control, Software Quality Assurance, HR, Entrepreneurship, Software Engineering, Digital Logic Design, Data Communication and Networks, Internet Programming.<br/><br/>

  <strong>Punjab Group of Colleges, Burrwala (Pakistan)</strong> September 2013 – August 2016<br/>
  <em>Intermediate (Pre-Medical)</em>: Physics, Chemistry, Math, English (A+ grade).<br/><br/>

  <strong>Govt M.C Model High School (Pakistan)</strong> September 2011 – September 2013<br/>
  <em>Matriculation</em>: Mathematics, English, Computer Science, Chemistry, and Physics (A+ grade).
</div>

<div className="separator"></div> {/* Separation Line */}
  
<h2 className="text-3xl font-bold mt-6">Professional Experience</h2>
<div className="mt-4">
    <strong>Software Engineer</strong>, DevnTech, Lahore<br/>
    <em>2020 – 2021</em><br/>
    <ul>
        <li>Spearheaded multiple web development projects, ranging from e-commerce platforms to healthcare web applications, leveraging modern frameworks such as AngularJS and extensive libraries including TailwindUI, Material-UI, TailwindCSS, ChakraCSS, and Ant Design.</li>
        <li>Acted as the team lead for a project team, driving the use of Python's powerful libraries (Pandas, Seaborn, NumPy) to perform advanced data analysis tasks, enabling insightful decision-making through both supervised and unsupervised learning methods.</li>
        <li>Pioneered the integration of cutting-edge JavaScript libraries and frameworks, enhancing project functionality and user experience, and ensuring responsiveness across all platforms.</li>
        <li>Guided the team in adopting agile methodologies, improving project delivery times and boosting team productivity.</li>
    </ul>
    <br/>
    <div className="separator1"></div> {/* Separation Line */}
    <strong>Freelance Database Designer and Web Solutions Provider</strong>, Self-Employed<br/>
    <em>2017 – 2020</em><br/>
    <ul>
        <li>Delivered bespoke database design and custom web solutions to a diverse client base, both local and international, specializing in React.js, MongoDB, Express.js, Node.js, WordPress theme, and plugin development.</li>
        <li>Engineered responsive, user-centered web applications and sites, significantly improving client online presence and user engagement.</li>
        <li>Demonstrated expertise in full-stack web development, from conceptualization to deployment, employing MERN stack for dynamic and scalable web applications.</li>
        <li>Cultivated strong client relationships through exceptional project management and communication, ensuring projects were delivered on time, within scope, and beyond expectations.</li>
    </ul>
</div>
<div className="separator"></div> {/* Separation Line */}
  
<h2 className="text-3xl font-bold mt-6">Professional Skills</h2>
            <div className="mt-4">
            <ul className="skills-container">
                <li className="skill-item"><FaReact className="react-icon" />React.js</li>
                <li className="skill-item"><SiMongodb className="mongodb-icon" />MongoDB</li>
                <li className="skill-item"><FaNodeJs className="nodejs-icon" />Node.js</li>
                <li className="skill-item"><FaWordpress className="wordpress-icon" />WordPress</li>
                <li className="skill-item"><FaAngular className="angular-icon" />AngularJS</li>
                <li className="skill-item"><FaJsSquare className="javascript-icon" />JavaScript</li>
                <li className="skill-item"><SiExpress className="express-icon" />Express.js</li>
                <li className="skill-item"><FaPython className="python-icon" />Python</li>
                <li className="skill-item"><FaCss3Alt className="css-icon" />CSS Frameworks</li>
                <li className="skill-item"><AiOutlineAntDesign className="antdesign-icon" />Ant Design</li>
            </ul>
            </div>
        <h2 className="text-3xl font-bold mt-6">Certifications and Notable Projects</h2>
        <ul className="list-disc pl-6 mt-4">
          {/* Certifications & Projects list unchanged */}
        </ul>

        <div className="separator"></div> {/* Separation Line */}
        
  
        <h2 className="text-3xl font-bold mt-6">Continued Learning and Future Goals</h2>
        <p className="mt-4">
          The tech industry's rapid evolution drives me to continuously learn and adapt. Currently, I am expanding my expertise in cloud security and AI applications, aiming to contribute to projects that leverage technology for societal benefit. My future goals include leading initiatives that bridge technology and sustainable practices, ultimately enhancing quality of life and fostering innovation.
        </p>
  
        <h2 className="text-3xl font-bold mt-6">Community Involvement and Collaboration</h2>
        <p className="mt-4">
          Beyond my professional endeavors, I am an active member of the tech community. I contribute to open-source projects, participate in hackathons, and engage in forums to share knowledge and collaborate with peers. These experiences have not only broadened my technical skills but have also enriched my understanding of global perspectives and teamwork.
        </p>
  
        <p className="mt-4">
          Thank you for exploring my journey. I am always open to discussing new technologies, project ideas, or potential collaborations. Feel free to connect with me on LinkedIn or via email.
        </p>
      </div>
    );
  }
  
  export default Bio;
  