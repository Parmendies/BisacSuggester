# BisacSuggester

Node.js ve TypeScript ile geliştirilmiş, kitap başlığı, içerik, sepet ve kısa açıklama girdilerini alıp BISAC kodu öneren bir REST API sunucusu.

## Kurulum

```bash
npm install
```

## Kullanım

```bash
npm run dev
```

## API

```bash
POST /api/suggest
```

## Local Test

```bash
curl -X POST http://localhost:3000/api/predict -H "Content-Type: application/json" -d "{\"title\":\"Örnek Kitap Başlığı\",\"context\":\"Kitabın kısa özeti burada.\",\"cart\":[\"kategori1\",\"kategori2\"],\"curta\":\"Kısa açıklama\"}"
```

## License

MIT
