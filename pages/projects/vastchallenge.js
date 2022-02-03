import { PROJECT_ENUMS } from "../../enums/ProjectEnums";
import Projects from "../projects";

const ProjectVast = () => {
  
    return (
         <div className='background'>
            <Projects  projectEnum={PROJECT_ENUMS.PROJECTVAST} />
        </div>
    )

}
export default ProjectVast;