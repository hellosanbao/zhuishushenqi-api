module.exports = {
  apps : [{
    name      : 'zhuishushenqi-api',
    script    : 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '132.232.3.185',
      ref  : 'origin/master',
      repo : 'git@github.com:hellosanbao/zhuishushenqi-api.git',
      path : '/home/ubuntu/github/zhuishushenqi-api/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
