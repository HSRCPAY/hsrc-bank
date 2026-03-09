# HSRCBANK Ödeme Akışları ve Core Konseptler

Bu doküman, hsrcbank sandbox altyapısında kullanılacak temel ödeme akışlarını ve terimlerin doğru karşılıklarını referans olarak saklamak amacıyla oluşturulmuştur.

## 3D Model vs 3D Pay Farkı

Türkiye bankacılık sisteminde ve hsrcbank sandbox altyapısında bu iki kavramın farkı, 3D doğrulamasından sonra ödemenin (auth/capture) kim tarafından ve ne zaman tetikleneceğiyle ilgilidir.

### 1. 3D Model (Default Olarak Desteklenmeyecek)
*   **Akış:** `HSRCPAY` -> `HSRCBANK` (3D Doğrulama Sayfasına Yönlendirme) -> `HSRCPAY` (Form Post ile Dönüş)
*   **İşlev:** Bu modelde YALNIZCA 3D Secure doğrulaması (authentication) yapılır. **Hiçbir şekilde karta bloke konulmaz (Auth yapılmaz) veya para çekilmez (Capture yapılmaz).**
*   **Sonraki Adım:** 3D doğrulama başarılı dönerse, HSRCPAY'in kendi backend'i üzerinden HSRCBANK'a `auto_capture: true/false` bayrağı ile ek bir Server-to-Server (S2S) ödeme isteği atması gerekir.

### 2. 3D Pay (Sistemimizin Default ve Ana Akışı)
*   **Akış:** `HSRCPAY` -> `HSRCBANK` (3D Doğrulama Sayfasına Yönlendirme) -> `HSRCBANK Arka Planı` (Doğrulama başarılıysa anında para çekimi/bloke işlemi yapar) -> `HSRCPAY` (Sonucu Form Post ile döndürür).
*   **İşlev:** Kullanıcı 3D Secure şifresini girip başarılı olduğunda, hsrcbank isteği HSRCPAY'e geri POST etmeden *önce* işlemi (Auth veya Capture) kendi içinde tamamlar ve nihai sonucu HSRCPAY return URL'ine gönderir.

## Auto Capture (Otomatik Onay/Çekim) Mantığı

`auto_capture` parametresi, işlemin hesabından direkt çekilip çekilmeyeceğini (Sale) veya provizyonda bekletileceğini (Auth) belirler.

*   `auto_capture: true` -> **Capture (Sale):** İşlem başarılı olursa para direkt olarak çekilmiş sayılır.
*   `auto_capture: false` -> **Auth (Ön-Provizyon):** İşlem başarılı olursa kullanıcının limitinden sadece bloke (provizyon) alınır. Para fiilen merchant hesabına geçmez, sonradan "Capture" işlemi yapılması gerekir.

**Sistem Kuralları:**
1.  **3D Pay + Auto Capture:** Birlikte çalışır. İlk istekte gönderilen `auto_capture` durumuna göre para 3D başarılı olduktan hemen sonra içeride çekilir veya bloke edilir.
2.  **3D Model + Auto Capture:** Mantıken BİRLİKTE çalılamaz (çünkü 3D Model demek, ödeme adımını tamamen HSRCPAY'e bırakıp sadece doğrulamayı yapmak demektir).
3.  **HSRCBANK Sandbox'ı**, default olarak "3D Model"i es geçip doğrudan **"3D Pay"** akışını ve **"Auto Capture"** (true/false) özelliklerini destekleyecek şekilde inşa edilecektir.
