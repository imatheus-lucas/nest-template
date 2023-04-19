FROM node:18-alpine3.17 As development

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18-alpine3.17 As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile --production

COPY . .

COPY --from=development /app/dist ./dist

CMD ["node", "dist/main"]