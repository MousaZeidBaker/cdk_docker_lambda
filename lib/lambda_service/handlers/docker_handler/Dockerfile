FROM amazon/aws-lambda-nodejs:12

COPY app.ts package*.json tsconfig.json ./
RUN npm install && npm run build

CMD [ "dist/app.handler" ]
