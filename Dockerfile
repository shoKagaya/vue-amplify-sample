FROM node:10.13.0

ENV HOST=0.0.0.0
ENV PORT=8080

WORKDIR /var/stamp/
COPY package.json .
RUN yarn install
ADD . /var/stamp/
