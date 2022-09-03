import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const socialIcons = [
  {
    id: "linkedIn",
    link: "https://www.linkedin.com/in/brunolimajs/",
    icon: <BsLinkedin />,
  },
  {
    id: "youTube",
    link: "https://m.youtube.com/channel/UC44Mzz2-5TpyfklUCQ5NuxQ",
    icon: <BsYoutube />,
  },
  { id: "gitHub", link: "https://github.com/brunolyma", icon: <BsGithub /> },
];

export function Footer() {
  return (
    <footer className="container-fluid d-flex flex-column justify-content-center mt-3">
      <ul className="container">
        {socialIcons &&
          socialIcons.map((social) => (
            <li key={social.id} className="socialItem">
              <a href={social.link} target="_blank">
                {social.icon}
              </a>
            </li>
          ))}
      </ul>
      <div className="text-center mb-3">
        <small>Bruno Lima com OneBitCode&copy;2022</small>
      </div>
    </footer>
  );
}
