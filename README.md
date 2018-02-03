## phys.ly

Physly is a url shortener specifically designed for the physical web.

### http Without SSL on Physical Web
Physly will let you use http URLs with Physical Web beacons. Shorten your `http://` URL with Physly and we will give you an `https://` URL to use with your Eddystone beacons.

### Development
Start Server in Development

`$ clear && DEBUG=physly:* npm run local`

Start Server in Production

`$ npm start`

### Database
Uses postgres. Must migrate before running `$ npm start`.

* Create database manually in `$ psql`
* Add in credentials to `config/config.json`
* `$ sudo npm install -g sequelize-cli`
* `$ sudo npm install -g pg`
* `$ NODE_ENV=production sequelize db:migrate`
* `$ npm run seed` (Optional)

### Deployment
#### Run Server
`$ pm2 start npm -- start`

#### Update Server
`$ git pull origin master`
`$ pm2 restart npm`

#### HTTPS with letsencrypt
Renewing must be done manually. Make sure to redirect http to https in the prompt.

```
$ cd /opt/letsencrypt/
$ ./letsencrypt-auto --renew-by-default
```
