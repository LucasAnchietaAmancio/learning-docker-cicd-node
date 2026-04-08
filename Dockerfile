FROM node:24-slim

WORKDIR /app

COPY . .

EXPOSE 3001

CMD ["npm", "start"]