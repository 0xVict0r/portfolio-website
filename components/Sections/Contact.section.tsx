import type { NextComponentType } from "next";

import {
  AiFillLinkedin,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="-mt-5 px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/0xVict0r" />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/0xVict0r"
        />

        <Icon icon={<MdEmail />} url="mailto:vmorizon.pro@gmail.com" />

        <Icon
          icon={<AiFillLinkedin />}
          url="https://www.linkedin.com/in/victor-morizon/"
        />
      </div>
    </div>
  );
};

export default Contact;
