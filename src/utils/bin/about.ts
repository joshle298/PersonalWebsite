import config from '../../../config.json';

const about = async (): Promise<string> => {
  return `                     

    ░░░░        ░░░░                
  ░░    ░░    ░░    ░░ 
    ░░██░░████░░██░░     
  ░░░░▒▒░░▒▒▒▒░░▒▒░░░░
  ▓▓░░░░▓▓░░░░▓▓░░░░▓▓  
  ▒▒░░░░██░░░░██░░░░▒▒
  ████    ▒▒▒▒    ████ 
  ░░                ░░    
    ░░            ░░ 
      ░░░░░░░░░░░░   
     
      
-----------
 ABOUT ME
 ${config.name}
爵 I’m a senior at NYU studying Computer Science 
with a minor in Mathematics. I've held the title of Software 
Engineering Intern at Gusto, Apple, Wayfair, and SendBlue (startup).
Outside of school and work, I enjoy cooking new recipes,
playing ultimate frisbee, and field volleyball
-----------
 CONTACT 
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
-----------
`;
};

export default about;
