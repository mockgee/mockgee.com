---
title: Installation
description: Mockgee Installation step
page: 2
---

[![N|Solid](https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/powered_by_mockgee.png)](https://expressjs.com/)

<info-box type="is-danger">
  <template #info-box>

Local installation using NPM and Docker is not available in Beta release. Use our [Mockgee as cloud service](https://cloud.mockgee.com) instead.
  </template>
</info-box>

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
You can create an Mockgee instance in a Docker container using the Mockgee Open Source image from the Docker Hub.

Launch an instance of NGINX running in a container and using the default Mockgee configuration with the following command:


```sh
$ docker run --name my-mockgee -d -p 9000:9000 mockgee
```

where:

* my-mockgee is the name of the created container based on the Mockgee image
* the -d option specifies that the container runs in detached mode: the container continues to run until stopped but does  not respond to commands run on the command line.
* the -p option tells Docker to map the ports exposed in the container by the Mockgee image (port 80) to the specified port on the Docker host. The first parameter specifies the port in the Docker host, the second parameter is mapped to the port exposed in the container

<br/>

The command returns the long form of the container ID: ahfhfhir948jjfkkdkkls91238f2558ae2704d129cf9fb97bb4884jjfhd. This form of ID is used in the name of log files.

<br/>

Verify that the container was created and is running with the docker ps command:

```bassh
$ docker ps
CONTAINER ID  IMAGE         COMMAND               CREATED         STATUS        ...  
fcd1fb01b145  mockgee:latest  "node index.js 'daemon of  16 seconds ago  Up 15 seconds ... 

    ... PORTS              NAMES
    ... 0.0.0.0:9000->9000/tcp my-mockgee
```


## People

The original author of Mockgee is [Tanveer Iqbal](https://github.com/tqiqbal)


## License

  [MIT](LICENSE)

  <br/>

  

