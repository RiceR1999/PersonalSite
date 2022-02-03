import { PAGE_ENUMS } from '../enums/PageEnums';
import App from "../src/components/App";

const Skills = () => {
    return (
       <div className='background'>
                <App pageEnum={PAGE_ENUMS.SKILLS} />
        </div>
    )

}
export default Skills;