# Feature: Interactive Social Presentation (Kaydırılabilir Sunum)

Bu belge, Nexordo projesi için geliştirilen interaktif tanıtım sunumunun teknik yapısını ve içeriğini belgeler.

## 🎯 Amaç
Sosyal medya dinamiklerine (Story/TikTok) uygun, yüksek enerjili ve kullanıcıyı harekete geçiren (Lead Generation) bir tanıtım deneyimi sunmak.

## 🏗️ Teknik Mimari
- **Bileşenler:** 
  - `src/components/InteractivePresentation.tsx` (Logic & UI)
  - `src/components/PresentationData.ts` (İçerik/Slide Data)
- **Teknoloji:** Framer Motion (Slide transitions, high-performance animations).
- **Etkileşim:** 
  - Klavye (Ok tuşları & ESC)
  - Swipe (Drag) desteği (Mobil)
  - Progress bar (Süreç takibi)

## 📝 Güncel İçerik Yapısı (PresentationData.ts)
Şu anda 5 ana slayttan oluşmaktadır:
1. **Giriş:** Marka vizyonu ve Hook.
2. **Restorasyon:** AI gücü vurgusu.
3. **Algoritma:** Ekipman bağımsızlığı.
4. **Güvenlik:** Kurumsal güven ve hız.
5. **CTA:** "Şimdi Başla" yönlendirmesi.

## 🛠️ Bakım & Güncelleme Notları
- **Yeni Slayt Ekleme:** `PresentationData.ts` içindeki diziye yeni bir nesne eklemeniz yeterlidir. İkonlar `lucide-react` kütüphanesinden seçilmelidir.
- **Tasarım Değişikliği:** Gradyan ve aksan renkleri her slaytın `accent` prop'u üzerinden `Tailwind` sınıflarıyla (örn: `from-blue-400 to-indigo-500`) yönetilir.
- **Tetikleyici:** `App.tsx` içindeki `setShowPresentation(true)` state'i ile kontrol edilir.

---
**Durum:** ✅ Üretime Hazır (Production Ready)
**Son Güncelleme:** 2026-01-26
**Sorumlu Agent:** Antigravity (Frontend Specialist)
