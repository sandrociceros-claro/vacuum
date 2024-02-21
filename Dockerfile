# Use a versão específica do Golang para evitar problemas inesperados com as atualizações mais recentes
FROM golang:1.21 AS builder

# Crie o diretório de trabalho
RUN mkdir -p /opt/vacuum

# Defina o diretório de trabalho
WORKDIR /opt/vacuum

# Copie apenas os arquivos necessários para a compilação
COPY go.mod go.sum ./

# Baixe as dependências em uma camada separada para aproveitar o cache do Docker
RUN go mod download && go mod verify

# Copie o restante dos arquivos
COPY . .

# Compile o aplicativo
RUN go build -ldflags="-w -s" -v -o vacuum vacuum.go

# Use uma imagem base menor para reduzir o tamanho da imagem final
FROM debian:bookworm-slim

# Adicione um usuário não-root e grupo 'appuser'
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Defina o diretório de trabalho
WORKDIR /work

# Copie o binário compilado do estágio de construção
COPY --from=builder /opt/vacuum/vacuum /usr/local/bin/vacuum

# Copie o script de entrada
COPY docker-entrypoint.sh /

# Altere a propriedade do diretório de trabalho para o usuário não-root
RUN chown -R appuser:appuser /work

# Mude para o usuário não-root
USER appuser

# Defina o script de entrada como o ponto de entrada
ENTRYPOINT ["/docker-entrypoint.sh"]
