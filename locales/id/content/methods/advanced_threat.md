---
title: Merespon ke Ancaman Lanjutan
position: 130
summary: |
  Komponen ini memungkinkan auditor dapat mengidentifikasi, triase, dan
  menganalisis perilaku mencurigakan pada suatu peranti atau dalam suatu
  jaringan. Bergantung pada analisis, auditor mungkin perlu menyelidiki lebih
  jauh suatu infeksi malware, menganalisis suatu biner, dan menentukan 
  apakah itu jahat atau tidak, dan menyarankan langkah-langkah mitigasi
  segera.
short_summary: Mengidentifikasi, triase, dan menganalisis perilaku mencurigakan pada suatu peranti atau dalam suatu jaringan untuk ancaman lanjutan potensial dan menyarankan langkah-langkah mitigasi segera.
the_flow_of_information: "![](/img/advanced_threat.png)"
method_icon: "/img/advanced_threat_icon.png"
guiding_questions: |
  * Apakah organisasi curiga bahwa mereka telah kena malware? Bila ya, bukti apa yang mendukung itu?
  * Apakah anggota staf pernah menerima komunikasi mencurigakan, seperti surel atau IM?
  * Berdasarkan pada riset konteks dan aktivitas organisasi, seberapa mungkin serangan tertarget?
  * Berapa banyak waktu mesti dicurahkan ke analisis yang lebih lengkap selama audit itu sendiri, dan faktor-faktor lain apa yang mengubah itu?
  * Apa implikasi dari malware tertarget bagi organisasi, dan bagi proses asesmen saat ini?
  * Tipe malware apa yang mesti memicu pendekatan tanggap insiden?
authors:
  - SAFETAG
activities:
  - Analisis Aktivitas Mencurigakan
  - Forensik Digital dan Pengambilan Bukti
  - Analisis Forensik
  - Kontak Tanggap Insiden dan Darurat
  - Riset Konteks Teknis
  - Pemindaian Jaringan
references:
  - Analisis Malware
  - Forensik Digital
operational_security: |
  * Untuk keterlibatan dengan potensi ancaman tingkat tinggi, auditor harus melakukan **Asesmen Kapabilitas Lawan** yang lebih komprehensif - berdasarkan riset konteks teknis. Adakah Ancaman Persisten Lanjutan yang perlu dipertimbangkan? Bagaimana cara kerjanya? Adakah indikator terkompromi yang diketahui untuk dicari?
  * Perjanjian tentang pengambilan data pada perangkat yang terinfeksi harus ditandatangani dengan organisasi sebelum langkah ini.
  * Auditor harus memastikan mereka memiliki pemahaman yang jelas dengan organisasi tentang rencana tanggap insiden, titik kontak, dan proses untuk memungkinkan diskusi yang aman.
  * Berurusan dengan perangkat lunak berbahaya itu berrisiko, Anda harus mewaspadai ancaman di sekitarnya, jangan menginfeksi diri sendiri atau mesin lainnya.
  * Jangan mengunggah berkas ke layanan pihak ketiga (gunakan hash). Sangat berhati-hatilah dengan pengidentifikasian atau informasi yang berpotensi tertarget.
  * Gunakan VPN atau Tor untuk melakukan pencarian jika melakukan pencarian dari negara yang sangat kompetitif dengan negara organisasi, atau diketahui melakukan pengawasan.
  * Untuk infeksi atau insiden yang parah, auditor dan organisasi dapat menyepakati, melalui Rencana Tanggap Insiden, untuk membersihkan atau memformat ulang peranti-peranti kritis. Hal ini sangat memakan waktu dan dapat mengakibatkan hilangnya data, hilangnya media instalasi/lisensi program kritis, dan potensi infeksi ulang. Lanjutkan dengan sangat hati-hati dan jelas.
info_required: []
outputs: |
  **Karena keterbatasan waktu, auditor harus fokus mengidentifikasi aktivitas mencurigakan dan segera memilahnya**. Banyak di antaranya merupakan positif palsu yang terkait dengan perangkat lunak non-berbahaya lain yang menyebabkan mesin "berperilaku aneh" atau jenis perangkat lunak berbahaya lain yang kurang serius (dan tidak ditargetkan) seperti adware atau ransomware.

  Jika hal ini tidak dapat dikesampingkan, pengumpulan bukti, menjalankan riset dan analisis dasar, serta menilai risiko dan dampak terhadap prioritas organisasi akan membantu memprioritaskan tindakan lebih lanjut. Analisis biner yang mendalam sebaiknya disimpan untuk pekerjaan pasca-audit selama fase pelaporan dan tindak lanjut. Jika aset kritis terkompromi, auditor mungkin perlu mengoordinasikan langkah-langkah mitigasi yang mendesak dengan pakar TI lainnya.

  Manajemen waktu sangat krusial saat merespons potensi infeksi malware dan ancaman serupa yang lebih canggih. Jika menggunakan metode ini, auditor harus terus-menerus mempertimbangkan apakah akan melanjutkan proses ini atau menyelesaikan aspek lain dari rencana audit mereka. Di akhir proses audit, tanpa pemahaman tentang toleransi risiko organisasi, kapasitas yang ada, praktik/proses/kebijakan saat ini, dan aset informasi yang ada akan menghambat kemampuan auditor untuk memberikan laporan yang diprioritaskan atau memahami konteks seputar aktivitas berpotensi berbahaya yang telah mereka temukan.

  Hasil utama dari identifikasi ancaman tingkat lanjut harus berupa bukti seperti berkas, email, tangkapan layar, dan URL yang disertakan dalam pesan atau ditemukan pada koneksi yang mencurigakan.
info_provided: []
purpose: |
  Sangat umum menemukan perilaku, proses, lalu lintas, dan
  ‘aktivitas aneh’ lainnya yang mencurigakan selama audit SAFETAG. Praktisi
  SAFETAG harus selalu mewaspadai aktivitas mencurigakan saat mereka
  menerapkan metode SAFETAG lainnya dan aktivitas mereka, mulai dari
  interaksi dan diskusi dengan staf hingga asesmen peranti langsung
  dan analisis lalu lintas.
preparation: |
  #### Keterampilan Dasar

  * Pengetahuan tentang cara mendeteksi elemen berbahaya, memindai mesin, dan membersihkannya
  * Kemampuan melakukan riset malware awal dengan aman
  * Kemampuan membuat citra mesin dan mempraktikkan forensik digital serta proses pengambilan bukti yang baik (lihat [Aktivitas Pengambilan Bukti](https://safetag.org/activities/evidence_capture))
  * Berkontak dengan pakar analisis malware untuk investigasi yang lebih mendalam
---
