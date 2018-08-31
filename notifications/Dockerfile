FROM node

RUN apt update &&   apt install -y curl 
RUN mkdir -p /var/www/lam_land
WORKDIR /var/www/lam_notification

COPY . /var/www/lam_notification
RUN npm install

EXPOSE 2223

CMD ["npm", "start"]
