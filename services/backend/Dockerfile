FROM node:bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /usr/src/app

CMD ["dumb-init", "npm", "run", "start:dev"]
