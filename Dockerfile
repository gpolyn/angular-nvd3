FROM node:6.9

# Set up a Node environment with the Angular CLI to build a 
# production-ready Angular image with ahead-of-time compilation

# switch to Bash 
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# install the Angular CLI version
RUN npm i -g @angular/cli

# make the directory and copy over the files 
RUN mkdir -p /src 
COPY . /src 

WORKDIR /src 

# build and expose the result 
RUN npm i 
RUN npm rebuild node-sass
RUN ng build --prod --aot 
