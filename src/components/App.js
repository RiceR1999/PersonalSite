import Header from './Header';
import Content from './Content';
import { PAGE_ENUMS } from '../../enums/PageEnums';
import { PROJECT_ENUMS } from '../../enums/ProjectEnums';

const App = ({ pageEnum, projectEnum }) => {
    console.log(pageEnum);
    console.log(projectEnum);
    if (pageEnum) {
        switch (pageEnum, projectEnum) {
            case pageEnum === PAGE_ENUMS.SKILLS:
                return skillsPage();
            case pageEnum === PAGE_ENUMS.PROJECTS:
                return projectPage(); 
            case pageEnum === PAGE_ENUMS.HOME:
                return homePage();
            case projectEnum === PROJECT_ENUMS.PROJECTVAST:
                return vastPage();
            case projectEnum === PROJECT_ENUMS.PROJECTCHAT:
                return chatPage(); 
            case projectEnum === PROJECT_ENUMS.PROJECTBOT:
                return botPage();
            case projectEnum === undefined:
                return vastPage();
            default:
                return generatePage();
        }
    }
    function homePage() {
        return (
            <div >
                <Header />
                <Content pageEnum={PAGE_ENUMS.HOME} projectEnum={projectEnum}  />
            </div>
        );
    }
    function skillsPage() {
        return (
            <div >
                <Header />
                <Content pageEnum={PAGE_ENUMS.SKILLS} projectEnum={projectEnum}  />
            </div>
        );
    }

     function vastPage() {
            return (
                <div >
                    <Header />
                    <Content pageEnum={PAGE_ENUMS.PROJECTS} projectEnum={PROJECT_ENUMS.PROJECTVAST} />
                </div>
            )
        }
        function chatPage() {
            return (
                <div >
                    <Header />
                    <Content pageEnum={PAGE_ENUMS.PROJECTS} projectEnum={PROJECT_ENUMS.PROJECTCHAT} />
                </div>
            )
        }
        function botPage() {
            return (
                <div >
                    <Header />
                    <Content pageEnum={PAGE_ENUMS.PROJECTS} projectEnum={PROJECT_ENUMS.PROJECTBOT} />
                </div>
            )
        }
    function generatePage() {
        return (
            <div >
                <Header />
                <Content pageEnum={pageEnum} projectEnum={projectEnum}  />
            </div>
        );
    }
}

export default App;