# build stage
ARG REACT_APP_API_URL

FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# production stage
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
