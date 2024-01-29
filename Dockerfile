FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html
COPY ./src/assets/ctnelson2_resume.pdf /usr/share/nginx/html/assets/ctnelson2_resume.pdf
COPY ./src/assets/ctnelson2_cv.pdf /usr/share/nginx/html/assets/ctnelson2_cv.pdf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]