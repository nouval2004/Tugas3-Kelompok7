# Anime Characters API

Sebuah API sederhana untuk mengelola data karakter anime menggunakan Express.js dan TypeScript.

## 🚀 Teknologi yang Digunakan

- Node.js
- Express.js
- TypeScript

## 📋 Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:
- Node.js (versi 14 atau lebih tinggi)
- npm (Node Package Manager)

## 🛠️ Instalasi

1. Clone repositori ini:
   ```bash
   git clone [url-repositori-anda]
   ```

2. Instal dependensi yang diperlukan:
   ```bash
   npm install
   ```

3. Jalankan aplikasi:
   ```bash
   npm start
   ```

Aplikasi akan berjalan di http://localhost:3000

## 📝 Struktur Data
Setiap karakter anime memiliki struktur data sebagai berikut:

```typescript
{
    id: number;       // ID unik karakter
    name: string;     // Nama karakter
    anime: string;    // Anime asal karakter
    power: string;    // Kekuatan karakter
}
```

## 🔥 Fitur API
### Endpoint yang Tersedia

1. **Mendapatkan Semua Karakter**  
   - **Method**: GET  
   - **Endpoint**: `/characters`  
   - **Response**:
     ```json
     {
         "data": [
             {
                 "id": 1,
                 "name": "Naruto Uzumaki",
                 "anime": "Naruto",
                 "power": "Rasengan"
             }
         ]
     }
     ```

2. **Mendapatkan Karakter Berdasarkan ID**  
   - **Method**: GET  
   - **Endpoint**: `/characters/:id`  
   - **Response**:
     ```json
     {
         "data": {
             "id": 1,
             "name": "Naruto Uzumaki",
             "anime": "Naruto",
             "power": "Rasengan"
         }
     }
     ```

3. **Menambah Karakter Baru**  
   - **Method**: POST  
   - **Endpoint**: `/characters`  
   - **Body**:
     ```json
     {
         "name": "Nama Karakter",
         "anime": "Nama Anime",
         "power": "Kekuatan"
     }
     ```

4. **Mengupdate Karakter**  
   - **Method**: PUT  
   - **Endpoint**: `/characters/:id`  
   - **Body**:
     ```json
     {
         "name": "Nama Baru",
         "anime": "Anime Baru",
         "power": "Kekuatan Baru"
     }
     ```

5. **Menghapus Karakter**  
   - **Method**: DELETE  
   - **Endpoint**: `/characters/:id`

## ⚠️ Penanganan Error
API akan mengembalikan response error dengan format:

```json
{
    "message": "Pesan error"
}
```

Kode Status yang digunakan:

- **200**: Sukses
- **201**: Berhasil membuat data baru
- **400**: Bad Request
- **404**: Data tidak ditemukan

## 💻 Pengembangan Lokal

1. Clone repositori
2. Instal dependensi: `npm install`
3. Jalankan dalam mode development: `npm run dev`
   
Server akan berjalan di http://localhost:3000

## 🧪 Pengujian API di Postman

Anda dapat menguji API ini menggunakan Postman dengan langkah-langkah berikut:

1. **Mendapatkan Semua Karakter**  
   - Buka Postman, pilih metode **GET**
   - Masukkan URL: `http://localhost:3000/characters`
   - Klik **Send**
   - Periksa response yang diterima

2. **Mendapatkan Karakter Berdasarkan ID**  
   - Pilih metode **GET**
   - Masukkan URL: `http://localhost:3000/characters/{id}` (gantilah `{id}` dengan ID karakter yang ada)
   - Klik **Send**

3. **Menambah Karakter Baru**  
   - Pilih metode **POST**
   - Masukkan URL: `http://localhost:3000/characters`
   - Pergi ke tab **Body** dan pilih **raw**, lalu pilih **JSON**
   - Masukkan data karakter seperti berikut:
     ```json
     {
         "name": "Goku",
         "anime": "Dragon Ball",
         "power": "Kamehameha"
     }
     ```
   - Klik **Send**

4. **Mengupdate Karakter**  
   - Pilih metode **PUT**
   - Masukkan URL: `http://localhost:3000/characters/{id}`
   - Pergi ke tab **Body**, pilih **raw**, lalu pilih **JSON**
   - Masukkan data yang diperbarui:
     ```json
     {
         "name": "Goku Super Saiyan",
         "anime": "Dragon Ball Z",
         "power": "Super Kamehameha"
     }
     ```
   - Klik **Send**

5. **Menghapus Karakter**  
   - Pilih metode **DELETE**
   - Masukkan URL: `http://localhost:3000/characters/{id}`
   - Klik **Send**

Pastikan server sudah berjalan sebelum melakukan pengujian.

## 👥 Kontributor
- muhammad nouval rifqi
- azri harniza
- tiara andini

## 📄 Lisensi
[Tipe Lisensi] - lihat LICENSE.md untuk detail lebih lanjut.

