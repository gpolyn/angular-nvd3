FROM nginx:alpine
RUN apk update && apk add nodejs
RUN mkdir -p /src 
COPY . /src 
WORKDIR /src 
# build and expose the result 
# RUN npm install webpack-dev-server rimraf webpack typescript -g
RUN npm i -g @angular/cli@1.0.4
RUN npm i 
RUN npm rebuild node-sass  
RUN ng build --prod --aot 
RUN cp -a /src/dist/. /usr/share/nginx/html
WORKDIR /
COPY nginx.conf /etc/nginx/
