import { isPlatform } from "@ionic/react";

const Platforms = {
  isMobile: () => isPlatform("mobile"),
};

export default Platforms;
