# https://mherman.org/blog/dockerizing-a-react-app/
# build environment
FROM node:16 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html/assets/
COPY ./src/assets/ctnelson2_resume.pdf /usr/share/nginx/html/assets/ctnelson2_resume.pdf
COPY ./src/assets/ctnelson2_cv.pdf /usr/share/nginx/html/assets/ctnelson2_cv.pdf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]