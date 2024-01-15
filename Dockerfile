FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY components ./components
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY utils ./utils
COPY next-env.d.ts ./
COPY next.config.js ./
COPY tsconfig.json ./

# Expose port 3000
EXPOSE 3000

# Build
RUN npm run build

# Start
CMD [ "npm", "run", "start" ]
