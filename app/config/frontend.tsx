
import { SuperTokensConfig } from "supertokens-auth-react/lib/build/types";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";



export const frontendConfig = (): SuperTokensConfig => {
  return {
    appInfo,
    recipeList: [EmailPassword.init(), Session.init()],
  };
};
