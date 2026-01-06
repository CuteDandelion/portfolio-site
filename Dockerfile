# Multi-stage Dockerfile for Next.js static site
# Optimized for security and minimal image size

# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install git and git-lfs for pulling large media files
RUN apk add --no-cache git git-lfs && \
    git lfs install

# Copy package files
COPY package.json package-lock.json* ./

# Install ALL dependencies (including devDependencies needed for build)
RUN npm ci && \
    npm cache clean --force

# Copy source code
COPY . .

# Pull actual files from Git LFS (videos, large images)
RUN git lfs pull || true

# Clean cache and old build artifacts before building
# Ensures fresh build even if .dockerignore doesn't catch everything
RUN rm -rf .next out node_modules/.cache

# Build the application (creates /app/out directory)
RUN npm run build

# Stage 2: Production with Nginx
FROM nginx:alpine AS production

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built static files from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Create necessary directories and set permissions
# Note: nginx user/group already exist in nginx:alpine image
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /var/run /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html /var/cache/nginx /var/log/nginx /var/run

# Health check on port 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/health || exit 1

# Switch to non-root user
USER nginx

# Expose port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
