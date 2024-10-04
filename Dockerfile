# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app/memorygame

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el proyecto al contenedor
COPY . /app/memorygame

# Expone el puerto donde corre tu aplicación
EXPOSE 3030

# Comando para iniciar la aplicación
CMD ["npm", "start"]
