# Stage 1: Build React app using Vite
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve using NGINX
FROM nginx:alpine

# Copy build output to NGINX public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: custom NGINX config (only if you have it)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
