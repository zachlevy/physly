## phys.ly

Physly is a url shortener specifically designed for the physical web. This is useful for the hardware limitations of the Bluetooth Eddystone protocol used in beacons for the Physical Web.

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
