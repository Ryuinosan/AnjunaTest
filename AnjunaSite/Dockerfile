# --- ESTÁGIO 1: Build (Construção) ---
# Usamos uma imagem oficial do Node.js como base para construir o projeto
FROM node:20-alpine as builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json para o container
# Fazemos isso em um passo separado para aproveitar o cache do Docker
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o resto do código-fonte para o container
COPY . .

# Executa o comando de build para gerar os arquivos estáticos
RUN npm run build

# --- ESTÁGIO 2: Produção ---
# Usamos uma imagem super leve do Nginx para servir os arquivos
FROM nginx:stable-alpine

# Copia os arquivos estáticos gerados no estágio de build para o diretório padrão do Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# (Opcional, mas recomendado) Copia uma configuração customizada do Nginx
# Vamos criar este arquivo no próximo passo
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 do container para o mundo exterior
EXPOSE 80

# Comando para iniciar o Nginx quando o container for executado
CMD ["nginx", "-g", "daemon off;"]