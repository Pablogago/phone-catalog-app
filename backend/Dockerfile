FROM node:14.15.4

LABEL version="1.0"
LABEL description="Docker image for the Phone App backend API."

WORKDIR /app

ENV NODE_ENV production

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]