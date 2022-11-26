# Chux vite + React + TypeScript Template

Just a template that I use to create new React with Typescript Apps


To Use: Clone this repo


This setup includes:

    vite
    eslint, typescript-eslint, eslint-airbnb-config, prettier
    vitest, jsdom, @testing-library
    react-router v6

## Docker in Development
This is a basic Docker setup for development using Docker, which I like.

> Newbies' Note:
 Install Docker first, should you wish to go down this road.

### Build the Image
```
   $ cd ./dir-where-code-was-dowloaded
   $ docker build -f Dockerfile.dev -t myweb-app . 
```
### Run the image

```
docker run -d  --name cs-web -v $(pwd)/src:/app/src:ro  -p 3000:3000 name-of-image-to-run
```
The above command runs the container in the backgroud (-d), names the container cs-web (--name), establishes a volume from which the code will synch (-v) this allows changes to occur and get picked up in the container without having to rebuild the container, makes this volume read-only (:ro), maps port 3000 on the local, host machine to port 3000 in the Docker Container. Finally, provide the name of the image to run.

## - OR - 

If you want to keep things simple, make sure `docker-compose` is installed and run:

```
# Build and run the first time
$ docker-compose -d -f docker-compose.dev.yaml up --build
# And just run after image is built 
$ docker-compose -d -f docker-compose.dev.yaml up
# bring down
$ docker-compose -d -f docker-compose.dev.yaml down
```

`docker-compose` in this context does the exact same thing as the commands shown in the previous example.

> Newby Note: I like docker desktop in development. I prefer gui to the command line. I know that's not as cool but
I'm a little old-school and cut my teeth on IDEs.




References

    https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/
    https://testing-library.com/docs/queries/about#priority
    https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
