const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-fabiano",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://phldgfwb1e.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7bjGRs0ED",
    APP_CLIENT_ID: "6mcb62ufuao0qpit1e0qggtdi2",
    IDENTITY_POOL_ID: "us-east-1:67fb34c3-ed54-493a-a90c-a842398933a7",
  },
};

export default config;
