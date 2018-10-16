//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://zeroecksx:Glub2411@ds129233.mlab.com:29233/cen3031'//place the URI of your mongo database here.
  },
  openCage: {
    key: '4130eee0e0cd4b839d5ae05d49f1403c' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
