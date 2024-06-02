const awsConfig = {
  Auth: {
    Cognito: {
      mandatorySignIn: true,
      region: import.meta.env.VITE_AWS_REGION,
      userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_AWS_USER_POOL_CLIENT_ID,
    },
  },
};

export default awsConfig;