import { PAGE_ENUMS, PROJECT_ENUMS } from '../enums/PageEnums';
import App from "../src/components/App";
import { ProjectProvider } from '../context/ProjectContext';

const Projects = ({projectEnum}) => {
  
    return (
        <div className='background'>
                <App pageEnum={PAGE_ENUMS.PROJECTS} projectEnum={projectEnum} />
            
        </div>
    )

}
export default Projects;