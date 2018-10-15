FROM node:8

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY ./dev /app/dev

# RUN chown -R www-data:www-data /app && \
#     yarn
RUN yarn

EXPOSE 8080

CMD [ "yarn", "run", "start" ]
