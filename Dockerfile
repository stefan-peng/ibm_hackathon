# base image
FROM node:12.2.0-alpine

# Install and configure `serve`.
RUN yarn global add serve
CMD serve -s build
EXPOSE 5000

# Install all dependencies of the current project.
COPY package.json package.json
RUN yarn

# Copy all local files into the image.
COPY . .

# Build for production.
RUN yarn run build --production