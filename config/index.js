const config = {
  app: {
    port: process.env.PORT || 8000,
    jwt: {
      secret_key: process.env.SECRET_KEY || 'vkbhd9HNqpz46ePwq6pKaWJz1ME7GXnJQqRXIpTqNmOp8BJR2Ya4uyPoYQlGHdX',
    },
  },
};
module.exports = config;
