FROM nginx:stable

RUN rm -v /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 80
CMD service nginx start
