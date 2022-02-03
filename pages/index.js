import App from "../src/components/App";
import { PAGE_ENUMS } from "../enums/PageEnums";

const IndexPage = () => {
  return (
    <div className="background">
      <App pageEnum={PAGE_ENUMS.HOME} />
    </div>
  );
};

export default IndexPage;
