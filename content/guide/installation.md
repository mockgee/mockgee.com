---
title: Installation
description: Mockgee Installation step
---

[![N|Solid](https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/powered_by_mockgee.png)](https://expressjs.com/)

<info-box>
  <template #info-box>

Before installing, [download and install Node.js](https://nodejs.org/en/download/) and [git](https://git-scm.com/downloads). Node.js v10.x or higher is recomended.
  </template>
</info-box>


Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ git clone https://github.com/mockgee/mockgee.git
$ cd mockgee && npm install
$ npm start
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```



## Contributing

[Contributing Guide](Contributing.md)

## Docker
Mockgee is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 9000, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd mockgee
docker build -t mockgee/mockgee:${package.json.version} .
```
This will create the mockgee image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Mockgee.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 9000 of the host to port 9000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 9000:9000 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:9000
```

## Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


## People

The original author of Mockgee is [Tanveer Iqbal](https://github.com/tqiqbal)


## License

  [MIT](LICENSE)

  

