# Dan's Plugins Community Website
This is a website intended to serve as a hub for the Dan's Plugins Community.

The website is currently hosted at [https://dansplugins.com](https://dansplugins.com).

## Contributing
If you would like to contribute to the website, you can do so by forking the repository and submitting a pull request. If you are not familiar with how to do this, you can follow the steps below:
1. Fork the repository
2. Clone the repository to your local machine
3. Make your changes
4. Commit your changes
5. Push your changes to your fork
6. Submit a pull request

## How to compile & run the project
### Compile Manually
To compile the project, you will need to have [Node.js](https://nodejs.org/en/) installed. Once you have Node.js installed, you can run the following commands in the project directory:

```bash
npm install
npm run build
```

### Run Manually
Once the project is compiled, you can run the project by running the following command in the project directory:

```bash
npm run start
```

### `build_and_run.sh` Script
Alternatively, you could execute the `build_and_run.sh` script in the project directory:

```bash
./build_and_run.sh
```

This script will compile the project and then run it.

### Docker
#### Start
The website can be run in a Docker container. To do this, you can run the following commands in the project directory:

```bash
docker build -t dpc-website .
docker run -p 3000:3000 dpc-website
```

#### Stop
To stop the Docker container, you can run the following command in the project directory:

```bash
docker stop dpc-website
```

### Docker Compose
#### Start
The website can also be run in a Docker container using Docker Compose. To do this, you can run the following command in the project directory:

```bash
docker-compose up
```

Alternatively, you could execute the `up.sh` script in the project directory:

```bash
./up.sh
```

#### Stop
To stop the Docker container, you can run the following command in the project directory:

```bash
docker-compose down
```

Alternatively, you could execute the `down.sh` script in the project directory:

```bash
./down.sh
```

## Next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE) (GPL-3.0).

You are free to use, modify, and distribute this software, provided that:
- Source code is made available under the same license when distributed.
- Changes are documented and attributed.
- No additional restrictions are applied.

See the [LICENSE](LICENSE) file for the full text of the GPL-3.0 license.
