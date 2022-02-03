import { PROJECT_ENUMS } from "../../enums/ProjectEnums";
import Projects from "../projects";

const ProjectBot = () => {
  
    return (
         <div className='background'>
                <Projects  projectEnum={PROJECT_ENUMS.PROJECTBOT}/>
        </div>
    )

}
export default ProjectBot;