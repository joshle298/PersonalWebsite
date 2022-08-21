import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `                     

        ░░░░        ░░░░
      ░░    ░░    ░░    ░░              -----------
        ░░░░██░░██░░██░░                爵 ABOUT
      ░░░░░░▒▒░░▒▒░░▒▒░░░░               ${config.name}
      ▓▓░░░░▓▓░░░░▓▓░░░░▓▓               <a href="JoshuaLeResume.pdf" target="_blank">resume</a>
      ▒▒░░░░██░░░░██░░░░▒▒ 
      ████    ▒▒▒▒    ████              -----------
      ░░                ░░               CONTACT 
        ░░            ░░                 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
          ░░░░░░░░░░░░                   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
                                        -----------
`;
};

export default sumfetch;