module.exports = {
  apps: [
    {
      name: 'dev.cygan.lol',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3010',
      restartDelay: 1000,
      instances: 1,
      autorestart: true,
    },
  ],
}
