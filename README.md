## phys.ly

Physly is a url shortener specifically designed for the physical web. It enables any url, regardless of https or http to be shortened. This is useful for the hardware limitations of the Bluetooth Eddystone protocol used in beacons for the Physical Web.

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

#### SSL and Postgres for Digital Ocean

[Video Tutorial](https://www.youtube.com/watch?v=kR06NoSzAXY)
[Blog Tutorial](https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/#install-nginx)
[Digital Ocean Database Setup](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)
