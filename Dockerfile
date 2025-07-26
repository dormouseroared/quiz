# Use the official Nginx image
FROM nginx:alpine 

# Remove default Nginx web files
RUN rm -rf /usr/share/nginx/html/*

# Copy the app into Nginx's web folder
COPY . /usr/share/nginx/html

