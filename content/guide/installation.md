---
title: Installation
description: Mockgee Installation step
---

[![N|Solid](https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/powered_by_mockgee.png)](https://expressjs.com/)

<info-box type="is-warning">
  <template #info-box>

Before installing, [download and install Node.js](https://nodejs.org/en/download/) and [git](https://git-scm.com/downloads). Node.js v12.x or higher is recomended.
  </template>
</info-box>


Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ git clone https://github.com/mockgee/mockgee.git
$ cd mockgee && npm install
$ npm start
```

Output
```bash
Server running at http://localhost:9000
```

It is important to remember that a Node.js application executed using this method will block further commands until the application is terminated. You can do this using Ctrl-C.

To test your application, you need to open a browser and visit this URL, server responses with Mockgee home page:


<info-box type="is-success">
  <template #info-box>
    Congratulations! you have successfylly installed Mockgee!!
  </template>
</info-box>

<br/>

Mockgee uses internal DB for it's storage layer however MongoDB is receommended for more reliable storage layer. To switch MongoDB, setups MongoDB url in /config/default.json

For example:

default.json

```json
{
  "timezone": "Asia/Riyadh",
  "host": {
     "port": "9000"
   },
   "storageType": "mongodb",
   "mongoDB_URL": "mongodb://localhost:27017/mockgee"
 }
 ```

## Contributing

[Contributing Guide](Contributing.md)

## Docker
Mockgee is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 9000 and uses internal DB for storage.

```bash
$ docker pull mockgee
```

```sh
$ docker run --name some-mockgee -d -p 9000:9000 mockgee:tag
```

Verify the deployment by navigating to your server address in your preferred browser.

```bassh
$ 127.0.0.1:9000
```


## People

The original author of Mockgee is [Tanveer Iqbal](https://github.com/tqiqbal)


## License

  [MIT](LICENSE)

  <br/>

  

