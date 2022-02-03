import Logo from "./Logo";
import { data } from "../../CompanyData";
import { PAGE_ENUMS } from "../../enums/PageEnums";
import { skillsData } from "../../SkillData";
import { PROJECT_ENUMS } from "../../enums/ProjectEnums";
import Link from "next/link";
import VastChallengeItem from "../projects/VastChallengeItem";
import BotItem from "../projects/BotItem";
import ChatroomItem from "../projects/ChatroomItem";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext, useEffect } from "react";
import react from "react";

const CardItem = (props) => {
  const { id, company, title, bio } = props.company;
  return (
    <div className="col-lg-5 col-md-11 col-xs-12 col-lg-5 col-xs-12 col-md-11 content d-flex d-flex-row justify-content-right align-items-right  m-auto">
      <div className="card card-header d-flex content justify-content-right align-items-right">
        <a
          className=" d-flex justify-content-right align-items-right "
          href="http://canarytokens.com/feedback/qvgh3ke51z1b2jlsz24fvib12/index.html"
        >
          <img src={`/images/image-${id}.jpg`} alt="test" className="img" />
        </a>
        <h4 className="display-right">{company}</h4>
        <span className="line"></span>
        <div className="b-10 pt-10">
          <h5>{title}</h5>
          <div className="card ">
            <p className="card-content">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeContent = ({ companyData }) => {
  return (
    <div className="row">
      {companyData.map((company) => {
        return <CardItem company={company} />;
      })}
    </div>
  );
};

const SkillContent = ({ skillData }) => {
  return (
    <div className="card card-header content text-resize pad-left ">
      {skillData.map((skill) => {
        return <SkillItem skill={skill} />;
      })}
    </div>
  );
};

const SkillItem = ({ skill }) => {
  const { title, skills } = skill;
  return (
    <ul>
      <b>{title}</b> <li className="no-hov">{skills}</li>
    </ul>
  );
};

const ProjectContent = ({ projectEnum }) => {
  console.log(projectEnum);
  return (
    <div className="container">
      <div class="nav, foreground">
        <ul class="nav">
          <Link href="/projects/vastchallenge">
            <li class="nav-item, navbar-text"> Vast Challenge </li>
          </Link>
          <Link href="/projects/bot">
            <li class="nav-item, navbar-text">Bot</li>
          </Link>
          <Link href="/projects/chatroom">
            <li class="nav-item, navbar-text">Chatroom</li>
          </Link>
        </ul>
      </div>
      {projectEnum === PROJECT_ENUMS.PROJECTVAST ? (
        <VastChallengeItem />
      ) : projectEnum === PROJECT_ENUMS.PROJECTBOT ? (
        <BotItem />
      ) : projectEnum === PROJECT_ENUMS.PROJECTCHAT ? (
        <ChatroomItem />
      ) : (
        <VastChallengeItem />
      )}
    </div>
  );
};

const Content = ({ pageEnum, projectEnum }) => {
  const companyData = data;
  const skillData = skillsData;
  console.log(projectEnum);
  console.log(pageEnum);
  return (
    <div class="content-header ">
      <div class="backdrop-main" id="head">
        <div class="foreground-header">
          <span class="foreground-header, profile-text">
            <Logo />
            <span className="line-header"></span>
          </span>
        </div>
        {pageEnum === PAGE_ENUMS.HOME ? (
          <HomeContent companyData={companyData} />
        ) : pageEnum === PAGE_ENUMS.SKILLS ? (
          <SkillContent skillData={skillData} />
        ) : pageEnum === PAGE_ENUMS.PROJECTS ? (
          <ProjectContent pageEnum={pageEnum} projectEnum={projectEnum} />
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};
export default Content;
