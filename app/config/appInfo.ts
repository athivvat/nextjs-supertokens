export const websiteDomain = process.env.NEXT_PUBLIC_APP_DOMAIN ?? "http://localhost:3000";

export const appInfo = {
    // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
    appName: "supertokens",
    websiteDomain: websiteDomain,
    websiteBasePath: "/auth",
    apiDomain: websiteDomain,
    apiBasePath: "/api/auth",
  }
  