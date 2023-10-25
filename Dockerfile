FROM node:18-alpine
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build
EXPOSE 3000
ENTRYPOINT ["pnpm", "start"]