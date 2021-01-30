
FROM node:14.15.4

LABEL version="1.0"
LABEL description="Docker image for the Phone App client."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]