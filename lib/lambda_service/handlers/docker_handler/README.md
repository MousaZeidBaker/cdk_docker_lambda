# Docker Lambda

## Getting started

Build docker image

`docker build -t docker-lambda .`

Create docker container

`docker run --name docker-lambda -d -p 9000:8080 docker-lambda:latest`

Locally invoke Lambda

`curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" --data-binary "@events/event.json"`

Stop docker container

`docker stop docker-lambda`

Remove docker container

`docker rm docker-lambda`
