export = {
  SERVER_URL: "localhost",
  SERVER_PORT: process.env.PORT || 8080,
  MONGODB_URL:
    process.env.NODE_ENV == "production"
      ? ""
      : "mongodb://127.0.0.1:27017/uptime_monitor",
  MONGODB_OPTIONS: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  SENDER_EMAIL: "task@task.com",
  NodeMailerHost: "smtp.mailtrap.io",
  NodeMailerPort: 2525,
  NodeMailerUser: "0f8c74b70dd45d",
  NodeMailerPass: "0c06daaaf665b2",
  EMAIL_TOKEN: "secretkeytogenerateverificationcode",
  AUTH_TOKEN: "secretkeytogenerateauthtoken"
};
