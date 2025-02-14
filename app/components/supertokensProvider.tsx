"use client";

import React from "react";
import { frontendConfig } from "../config/frontend";
import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react";

if (typeof window !== "undefined") {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

export const SupertokensProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <SuperTokensWrapper>{children}</SuperTokensWrapper>;
};
