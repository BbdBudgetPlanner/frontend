const awsConfig = {
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_AWS_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_CLIENT_ID,
  },
};

export default awsConfig;
