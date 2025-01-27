# ベースイメージとしてNode.jsを使用
FROM node:20

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# アプリケーションコードをコピー
COPY . .

# 開発サーバーを起動
CMD ["npm", "start"]
