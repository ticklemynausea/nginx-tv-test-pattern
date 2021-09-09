FROM nginx
COPY www/* /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/
EXPOSE 10080
