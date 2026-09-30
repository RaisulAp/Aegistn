/**
 * AEGIS WEB — STANDALONE INTERACTIVE CLIENT APP
 * PT Aegis Teknologi Nusantara · aegisteknologi.co.id
 * Replicates React 19 / Vite frontend architecture faithfully in vanilla JS.
 */

(function () {
    'use strict';

    /* ═════════════════════════════════════════════════════════════════════════
       1. OFFICIAL DATA STORE (Verbatim from Company Profile & Seeds)
       ═══════════════════════════════════════════════════════════════════════ */

    const DATA = {
        branding: {
            company_name: "PT Aegis Teknologi Nusantara",
            company_short_name: "Aegis",
            tagline: "From Research to Real Solutions",
            logo_url: "assets/logo-transparent.png",
            logo_dark_url: "assets/logo-dark.png",
            logo_mark_url: "assets/logo-mark.png",
            favicon_url: "assets/favicon.png",
            hero_bg_url: "assets/hero-bg.jpg",
            primary_color: "#002454",
            accent_color: "#00788F",
            accent_on_dark: "#29A0B5",
        },
        company: {
            legal_name: "PT Aegis Teknologi Nusantara",
            short_name: "Aegis",
            form_of_entity: "Perseroan Terbatas",
            director_name: "Dhea Retnoningsih, A.Md.Si., S.T",
            commissioner_name: "M. Hafizh Maulana",
            main_field: "Konsultansi rekayasa MRO, reliability engineering, managed monitoring, digital MRO, condition monitoring, software, IoT, dan analitik berbasis AI",
            tagline: "From Research to Real Solutions",
            about_lead: "PT Aegis Teknologi Nusantara adalah perusahaan konsultan rekayasa MRO dan manajemen keandalan aset yang membantu perusahaan maritim serta industri untuk meningkatkan keselamatan, reliability, technical availability, dan efisiensi biaya melalui engineering, digital maintenance, condition monitoring, pengolahan data, IoT, dan artificial intelligence.",
            address_primary: "Kp. Bolang 2 RT 007 RW 002, Desa Cibuluh, Kecamatan Tanjungsiang, Kabupaten Subang, Jawa Barat 41284",
            address_jakarta: "Infiniti Office Bellezza - Bellezza BSA, 1st Floor Unit 106, Jl. Letjen Soepeno, RT 004 / RW 002, Kelurahan Grogol Utara, Kecamatan Kebayoran Lama, Jakarta Selatan 12210",
            nib: "0308260004981",
            npwp: "1000 0000 1059 9988",
        },
        hero: {
            kicker: "MRO & RELIABILITY ENGINEERING",
            title: "Technology-Enabled MRO, Reliability, and Asset Monitoring",
            lead: "Mitra rekayasa MRO dan manajemen keandalan aset untuk industri maritim, pembangkit, pertambangan, dan industri proses di Indonesia.",
            cta_primary_label: "Lihat Layanan",
            cta_primary_target: "#services",
            cta_secondary_label: "Diskusikan Kebutuhan",
            cta_secondary_target: "#contact",
        },
        metrics: [
            { value: "5", label: "Lini layanan utama" },
            { value: "7", label: "Nilai perusahaan" },
            { value: "10", label: "Acuan standar & tata kelola" },
            { value: "13", label: "Kode KBLI 2025" },
        ],
        about: {
            kicker: "ARAH STRATEGIS",
            title: "Visi dan Misi",
            lead: "PT Aegis Teknologi Nusantara adalah perusahaan konsultan rekayasa MRO dan manajemen keandalan aset yang membantu perusahaan maritim serta industri untuk meningkatkan keselamatan, reliability, technical availability, dan efisiensi biaya melalui engineering, digital maintenance, condition monitoring, pengolahan data, IoT, dan artificial intelligence.",
            vision: "Menjadi mitra terpercaya dalam penyediaan solusi MRO dan keandalan aset berbasis teknologi untuk meningkatkan keselamatan, kesiapan operasi, produktivitas, dan daya saing industri maritim serta berbagai sektor usaha di Indonesia.",
            values: [
                "Integrity",
                "Reliability",
                "Innovation",
                "Professionalism",
                "Excellence",
                "Sustainability",
                "Collaboration",
            ],
            missions: [
                "Menyediakan konsultansi rekayasa MRO dan reliability engineering yang objektif, berbasis risiko, dan dapat dipertanggungjawabkan.",
                "Menyelenggarakan pemantauan kondisi teknis, reliability, availability, downtime, dan tindakan perbaikan secara berkala.",
                "Membangun sistem digital maintenance yang menghubungkan data aset, work order, condition monitoring, material, biaya, dan keputusan.",
                "Mengembangkan analitik dan AI secara bertahap berdasarkan kesiapan data, kebutuhan engineering, hasil validasi, dan tata kelola yang kuat.",
                "Mendukung perusahaan pelayaran, galangan, pelabuhan, pembangkit, pertambangan, dan industri proses dalam mengurangi downtime serta kegagalan berulang.",
                "Mengembangkan tenaga ahli nasional melalui kolaborasi, pelatihan, sertifikasi, riset terapan, dan transfer pengetahuan.",
                "Menjaga integritas, keselamatan, keamanan informasi, kualitas layanan, dan independensi rekomendasi.",
            ],
        },
        services: [
            {
                code: "4.1",
                title: "MRO and Reliability Engineering Consulting",
                summary: "Meningkatkan efektivitas maintenance dengan dasar engineering yang kuat.",
                scopes: [
                    "Maintenance maturity assessment dan improvement roadmap.",
                    "Asset hierarchy, criticality, RCM, FMEA/FMECA, RCA, dan bad-actor elimination.",
                    "Maintenance strategy, planning, scheduling, backlog, docking, shutdown, dan lifecycle-cost analysis.",
                    "Spare-parts criticality, bill of material, inventory risk, dan vendor evaluation.",
                ],
            },
            {
                code: "4.2",
                title: "Marine MRO Consulting",
                summary: "Kesiapan armada dari Planned Maintenance System hingga docking control.",
                scopes: [
                    "Planned Maintenance System improvement.",
                    "Main engine, auxiliary engine, propulsion, power generation, steering, pump, compressor, deck machinery, dan electrical system review.",
                    "Docking readiness, scope control, job list, material readiness, progress monitoring, dan closeout.",
                    "Fleet maintenance dashboard, defect register, class recommendation tracking, dan audit readiness.",
                ],
            },
            {
                code: "4.3",
                title: "Digital MRO and Asset Management",
                summary: "Data aset, work order, dan biaya dalam satu sistem digital terpadu.",
                scopes: [
                    "CMMS/EAM/PMS selection, implementation, configuration, dan optimization.",
                    "Digital work order, mobile inspection, maintenance master data, failure coding, material, dan document management.",
                    "Integration dengan ERP, SCADA, PLC, historian, sensor, IoT gateway, dan business intelligence.",
                ],
            },
            {
                code: "4.4",
                title: "Condition Monitoring and Predictive Maintenance",
                summary: "Dari alarm menjadi tindakan nyata yang tuntas dan tervalidasi.",
                scopes: [
                    "Vibration, temperature, lubrication/oil analysis, process parameter, dan electrical condition monitoring.",
                    "Monitoring strategy, baseline, alarm matrix, diagnostic workflow, dan technical advisory.",
                    "Anomaly detection, asset health index, failure probability, dan remaining useful life setelah validasi data.",
                ],
            },
            {
                code: "4.5",
                title: "Managed Reliability Service",
                summary: "Tim engineering profesional yang mendampingi operasi secara berkala.",
                scopes: [
                    "Remote monitoring dan periodic technical review.",
                    "Monthly reliability report, quarterly management review, dan annual improvement report.",
                    "Alert, diagnostic support, action tracking, repeat-failure prevention, dan on-call engineering.",
                ],
            },
        ],
        industries: [
            {
                tier: "Utama",
                sector: "Perkapalan, pelayaran, galangan, pelabuhan, dan marine services",
                focus: "Fleet readiness, machinery condition, PMS, docking, defect, downtime, dan reliability.",
            },
            {
                tier: "Terpilih",
                sector: "Pembangkit, pertambangan, manufaktur berat, dan industri proses",
                focus: "Rotating equipment, utility, production machinery, shutdown, OEE support, dan condition monitoring.",
            },
            {
                tier: "Selektif",
                sector: "Sektor lain dengan aset kritis dan data yang memadai",
                focus: "Diterima berdasarkan strategic fit, kompetensi, risiko, dan ketersediaan mitra.",
            },
        ],
        challenges: [
            {
                title: "Unplanned downtime tinggi",
                outcome: "Downtime terkendali",
                response: "Managed monitoring, reliability analysis, alert, dan action tracking.",
                impact: "Gangguan jadwal operasional atau produksi dan biaya darurat.",
                tagTone: "tag--teal",
            },
            {
                title: "Repeat failure",
                outcome: "Kegagalan berulang berhenti",
                response: "RCA, bad-actor elimination, PM optimization, dan effectiveness review.",
                impact: "Kerusakan berulang dan kehilangan kepercayaan pada maintenance.",
                tagTone: "tag--amber",
            },
            {
                title: "Maintenance tidak efektif",
                outcome: "Pemeliharaan tepat sasaran",
                response: "Criticality, RCM, task review, interval optimization.",
                impact: "Workload tinggi tetapi risiko kegagalan tetap besar.",
                tagTone: "tag--green",
            },
            {
                title: "Data terfragmentasi",
                outcome: "Data aset siap dipakai",
                response: "Asset hierarchy, data governance, CMMS/EAM/PMS, dan dashboard.",
                impact: "Keputusan lambat dan tidak konsisten.",
                tagTone: "tag--slate",
            },
            {
                title: "Spare parts tidak siap",
                outcome: "Waktu pemulihan lebih pendek",
                response: "Spare criticality, lead-time review, BOM, dan stock-risk analysis.",
                impact: "Waktu pemulihan panjang.",
                tagTone: "tag--teal",
            },
            {
                title: "Ekspektasi AI tidak realistis",
                outcome: "Pilot AI yang tidak berhenti di demo",
                response: "AI readiness, validation, human-in-the-loop, dan model governance.",
                impact: "Pilot gagal dan false alarm tinggi.",
                tagTone: "tag--amber",
            },
        ],
        testimonials: [
            {
                quote: "Kajian maturity pemeliharaan dari tim Aegis membantu kami mengidentifikasi komponen kritis yang menjadi penyebab 60% unplanned downtime armada kami.",
                author_name: "Ir. Bambang Suryono",
                author_role: "Head of Fleet Engineering",
                organization: "Mitra Operasi Maritim",
            },
            {
                quote: "Penyusunan RCM dan rasionalisasi alarm getaran membuat jadwal overhaul kapal kami jauh lebih terukur, tanpa pembengkakan biaya docking yang tidak terduga.",
                author_name: "Hendro Wicaksono, M.Mar.E",
                author_role: "Technical Superintendent",
                organization: "Perusahaan Pelayaran Nasional",
            },
            {
                quote: "Pendekatan engineering-first mereka sangat berbeda dari vendor perangkat lunak biasa. Fondasi hierarki aset dan SOP diperbaiki dulu sebelum sistem digital dijalankan.",
                author_name: "Budi Hartanto, S.T.",
                author_role: "Plant Maintenance Manager",
                organization: "Industri Pembangkit & Proses",
            },
        ],
        articles: [
            {
                id: 1,
                slug: "mengapa-strategi-pemeliharaan-dimulai-dari-criticality-aset",
                title: "Mengapa strategi pemeliharaan harus dimulai dari criticality aset",
                category: "Reliability Engineering",
                category_slug: "reliability-engineering",
                tags: ["RCM", "Criticality", "Manajemen Aset"],
                published_at: "28 September 2026",
                read_time: "5 menit baca",
                banner_key: "circuit",
                excerpt: "Setiap program pemeliharaan dimulai dengan daftar pekerjaan. Pertanyaan yang jarang diajukan sebelum daftar itu disusun adalah pertanyaan yang paling menentukan: aset mana yang layak mendapat perhatian lebih dulu?",
                content: `
          <p>Setiap program pemeliharaan dimulai dengan daftar pekerjaan. Pertanyaan yang jarang diajukan sebelum daftar itu disusun adalah pertanyaan yang paling menentukan: <strong>aset mana yang layak mendapat perhatian lebih dulu?</strong></p>

          <h2>Kesalahan yang paling sering terjadi</h2>
          <p>Pemeliharaan yang tidak efektif punya tanda yang khas — beban kerja tinggi, tetapi risiko kegagalan tetap besar. Pekerjaan dikerjakan tepat waktu, anggaran terserap, dan mesin yang kritis tetap saja berhenti tanpa peringatan.</p>
          <p>Penyebabnya hampir selalu sama: jadwal disusun dari kebiasaan dan ketersediaan tenaga, bukan dari konsekuensi kegagalan. Semua aset diperlakukan setara, sehingga tidak ada yang benar-benar diprioritaskan.</p>

          <h2>Kritis bukan berarti penting</h2>
          <p>Criticality adalah penilaian terukur atas konsekuensi kegagalan sebuah aset — terhadap keselamatan, produksi, lingkungan, dan biaya. Aset yang paling sering dibicarakan dalam rapat belum tentu yang paling kritis; aset yang kegagalannya paling tidak terlihat justru sering masuk kategori itu.</p>
          <p>Tanpa penilaian ini, keputusan pemeliharaan tidak punya dasar yang dapat dipertanggungjawabkan. Setiap orang punya prioritasnya sendiri, dan yang menang adalah yang paling banyak berbicara.</p>

          <h2>Dari criticality ke strategi yang dapat dibela</h2>
          <p>Setelah aset dinilai berdasarkan konsekuensinya, barulah strategi pemeliharaan bisa disusun. Kami bekerja dengan pendekatan yang sudah terbukti di industri maritim dan proses:</p>
          <ul>
            <li><strong>Criticality assessment</strong> — menyusun hierarki aset dan menetapkan konsekuensi kegagalan tiap tingkatan, sebagai dasar semua keputusan berikutnya.</li>
            <li><strong>RCM (Reliability Centered Maintenance)</strong> — menentukan tugas pemeliharaan dari mode kegagalan yang nyata, bukan dari daftar bawaan pabrikan.</li>
            <li><strong>FMEA / FMECA</strong> — memetakan mode, efek, dan tingkat kekritisan kegagalan secara sistematis.</li>
            <li><strong>RCA dan bad-actor elimination</strong> — menyelesaikan kerusakan berulang sampai ke akarnya, lalu menghentikannya agar tidak kembali.</li>
            <li><strong>Spare-parts criticality</strong> — memastikan suku cadang yang menentukan waktu pemulihan memang tersedia ketika dibutuhkan.</li>
          </ul>

          <h2>Mengapa urutan ini penting</h2>
          <p>Melompat langsung ke sistem digital atau analitik sebelum fondasi engineering terbentuk menghasilkan dua hal yang mahal: pekerjaan pemeliharaan yang tetap salah sasaran, dan data yang rapi tetapi tidak dapat dipakai mengambil keputusan. Perangkat lunak mempercepat apa yang sudah benar; ia tidak memperbaiki apa yang belum diputuskan.</p>
          <p>Karena itu setiap pekerjaan dimulai dari fungsi aset, criticality, mode kegagalan, kondisi operasi, dan keputusan yang harus diambil. Setelah fondasi itu terbentuk, barulah sistem digital dan analitik dirancang mengikuti kebutuhan yang sudah jelas — bukan sebaliknya.</p>

          <h2>Yang berubah setelah itu</h2>
          <p>Strategi yang berdiri di atas criticality dapat dipertanggungjawabkan. Interval pemeliharaan punya alasan, bukan hanya tradisi. Prioritas dapat dijelaskan kepada manajemen, dan setiap perubahan dapat diukur dampaknya terhadap keandalan aset.</p>
          <blockquote>Konsistensi, ketertelusuran proses, dan ketepatan analisis adalah dasar hasil yang dapat dipercaya — dan itu dimulai dari satu langkah yang sering dilewati: menentukan aset mana yang paling penting.</blockquote>
        `,
            },
            {
                id: 2,
                slug: "integrasi-condition-monitoring-dan-planned-maintenance-system-pada-armada-kapal",
                title: "Integrasi Condition Monitoring dan Planned Maintenance System pada Armada Kapal",
                category: "Marine MRO",
                category_slug: "marine-mro",
                tags: ["PMS", "Condition Monitoring", "Marine"],
                published_at: "20 September 2026",
                read_time: "4 menit baca",
                banner_key: "chart",
                excerpt: "Menghubungkan data getaran, suhu gas buang, dan analisis pelumas langsung ke dalam work order PMS untuk memangkas backlog dan menghentikan pembengkakan anggaran docking.",
                content: `
          <p>Sistem pemeliharaan terencana (PMS) pada kapal niaga sering kali menjadi tumpukan jadwal kalender yang tidak merefleksikan kondisi keausan mesin sebenarnya. Artikel ini membahas bagaimana data pemantauan kondisi (vibration, oil analysis, thermography) diintegrasikan langsung ke PMS.</p>
          <h2>Tantangan Jadwal Kalender</h2>
          <p>Banyak kapal melakukan overhaul generator atau pompa hanya karena jam operasi telah tercapai, padahal parameter teknis masih prima. Sebaliknya, bearing yang mengalami degradasi cepat tidak tertangkap sebelum tanggal servis tiba.</p>
          <h2>Dynamic Job Triggering</h2>
          <p>Dengan mengaitkan ambang batas ISO 17359 ke work order, tim superintendent di darat dan kepala kamar mesin di laut mendapatkan trigger pemeliharaan prediktif yang objektif.</p>
        `,
            },
            {
                id: 3,
                slug: "tata-kelola-data-aset-dan-kesiapan-ai-dalam-pemeliharaan-industri",
                title: "Tata Kelola Data Aset dan Kesiapan AI dalam Pemeliharaan Industri",
                category: "Asset Management",
                category_slug: "asset-management",
                tags: ["Data Governance", "AI Maintenance", "ISO 55001"],
                published_at: "15 September 2026",
                read_time: "6 menit baca",
                banner_key: "network",
                excerpt: "Mengapa melompat ke analitik prediktif sebelum data hierarki aset, failure coding, dan baseline sensor tervalidasi hanya menghasilkan false alarm dan pilot proyek yang gagal.",
                content: `
          <p>Banyak organisasi industri tergiur janji Artificial Intelligence untuk memprediksi kerusakan mesin secara otomatis. Namun tanpa ISO 14224 failure taxonomy dan standardisasi hierarki aset, algoritma AI hanya memperbesar derau.</p>
          <h2>Piramida Kesiapan Data</h2>
          <p>Sebelum model machine learning dapat dipercaya, organisasi harus melewati tiga tahap: pembersihan data historis, rasionalisasi batas alarm, dan validasi fisik di lapangan.</p>
          <h2>Tata Kelola Berkelanjutan</h2>
          <p>Data pemeliharaan yang bersih dan terstruktur adalah aset jangka panjang yang melindungi keputusan teknis dari spekulasi.</p>
        `,
            },
        ],
        legal: {
            "kebijakan-privasi": {
                title: "Kebijakan Privasi",
                updated_at: "25 September 2026",
                content: `
          <h2>1. Pendahuluan</h2>
          <p>PT Aegis Teknologi Nusantara ("Aegis", "kami") berkomitmen melindungi kerahasiaan dan keamanan data pribadi serta informasi operasional klien sesuai dengan Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022) dan standar keamanan informasi yang berlaku.</p>
          <h2>2. Data yang Dikumpulkan</h2>
          <p>Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela melalui formulir konsultasi situs ini, termasuk nama lengkap, alamat email perusahaan, nama perusahaan, serta deskripsi tantangan operasional aset.</p>
          <h2>3. Penggunaan Informasi</h2>
          <p>Informasi yang terkumpul digunakan semata-mata untuk menindaklanjuti permintaan konsultasi teknis, mempersiapkan initial assessment, dan berkomunikasi dengan Anda mengenai layanan keandalan aset kami. Kami tidak pernah menjual atau membagikan data Anda kepada pihak ketiga untuk kepentingan periklanan.</p>
          <h2>4. Keamanan Informasi</h2>
          <p>Kami menerapkan kontrol teknis dan prosedural untuk mengamankan data transmisi dan penyimpanan dari akses yang tidak sah, manipulasi, atau kebocoran informasi.</p>
          <h2>5. Hak Anda</h2>
          <p>Anda berhak meminta pembaruan, perbaikan, atau penghapusan data kontak Anda dari basis data kami kapan pun dengan menghubungi kami di <code>aegisteknologinusantara@gmail.com</code>.</p>
        `,
            },
            "syarat-ketentuan": {
                title: "Syarat dan Ketentuan Layanan",
                updated_at: "25 September 2026",
                content: `
          <h2>1. Ketentuan Umum</h2>
          <p>Dengan mengakses situs ini atau mengajukan permintaan konsultasi, Anda menyetujui syarat dan ketentuan layanan PT Aegis Teknologi Nusantara yang diatur di bawah ini.</p>
          <h2>2. Ruang Lingkup Konsultansi</h2>
          <p>Informasi teknis, kalkulator penghematan, dan simulator di situs ini bersifat indikatif dan edukatif. Rekomendasi teknis mengikat hanya diberikan setelah melalui validasi data dan kontrak kerjasama resmi.</p>
          <h2>3. Hak Kekayaan Intelektual</h2>
          <p>Seluruh materi, logo, metode analisis keandalan, diagram alur, teks artikel, dan grafis di situs ini merupakan hak kekayaan intelektual PT Aegis Teknologi Nusantara yang dilindungi oleh undang-undang.</p>
          <h2>4. Kerahasiaan Data Operasional</h2>
          <p>Setiap data armada, spesifikasi mesin, logbook, dan laporan kondisi teknis yang dibagikan klien kepada kami dalam proses konsultasi dilindungi oleh klausul kerahasiaan ketat (Non-Disclosure Agreement / NDA).</p>
        `,
            },
        },
    };

    /* ═════════════════════════════════════════════════════════════════════════
       2. ROUTER & NAVIGATION CONTROLLER
       ═══════════════════════════════════════════════════════════════════════ */

    let currentRoute = "/";
    let activeSectionSpy = "hero";

    function parseHash() {
        const raw = window.location.hash.slice(1);
        if (!raw || raw === "/" || raw === "top") return { path: "/", anchor: null };

        // Support section anchors whether written as #contact, #/contact, #/#contact
        const knownSections = ["hero", "metrics", "about", "services", "industries", "challenges", "testimonials", "contact", "lab-kapal", "lab-simulator", "lab-hemat"];
        const stripped = raw.replace(/^[/#]+/, "");
        if (knownSections.includes(stripped)) {
            if (stripped.startsWith("lab-")) {
                return { path: "/lab", anchor: stripped };
            }
            return { path: "/", anchor: stripped };
        }

        if (raw.startsWith("/")) {
            const parts = raw.split("#");
            return { path: parts[0], anchor: parts[1] || null };
        }
        // Anchor only (e.g. #contact, #services)
        return { path: "/", anchor: raw };
    }

    function navigateTo(path, anchor = null) {
        if (path === "/" && anchor) {
            window.location.hash = `#/${anchor}`;
        } else if (anchor) {
            window.location.hash = `#${path}#${anchor}`;
        } else {
            window.location.hash = `#${path}`;
        }
    }

    function handleRoute() {
        const { path, anchor } = parseHash();
        currentRoute = path;

        // Update active nav link classes
        updateNavLinks(path, activeSectionSpy);

        // Switch view container
        renderRoute(path);

        // If anchor requested, scroll after render
        if (anchor) {
            setTimeout(() => {
                const el = document.getElementById(anchor);
                if (el) {
                    const headerOffset = 80;
                    const rect = el.getBoundingClientRect();
                    const targetY = window.pageYOffset + rect.top - headerOffset;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                }
            }, 50);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    function updateNavLinks(path, sectionId) {
        document.querySelectorAll("[data-nav-target]").forEach((link) => {
            const targetType = link.getAttribute("data-nav-type");
            const target = link.getAttribute("data-nav-target");
            let active = false;

            if (targetType === "section") {
                active = path === "/" && sectionId === target;
            } else if (targetType === "route") {
                active = path === target || (target !== "/" && path.startsWith(target));
            }

            const underline = link.querySelector(".nav-underline");
            if (active) {
                link.classList.remove("text-[var(--ink-mute)]");
                link.classList.add("text-[var(--ink)]", "font-bold");
                link.setAttribute("aria-current", "true");
                if (underline) underline.style.transform = "scaleX(1)";
            } else {
                link.classList.remove("text-[var(--ink)]", "font-bold");
                link.classList.add("text-[var(--ink-mute)]");
                link.removeAttribute("aria-current");
                if (underline) underline.style.transform = "scaleX(0)";
            }
        });
    }

    function renderRoute(path) {
        const views = {
            "/": "view-home",
            "/profil": "view-profil",
            "/layanan": "view-layanan",
            "/lab": "view-lab",
            "/artikel": "view-artikel",
        };

        let targetViewId = views[path];
        let isArticleDetail = false;
        let isLegalDetail = false;

        if (!targetViewId) {
            if (path.startsWith("/artikel/")) {
                targetViewId = "view-artikel-detail";
                isArticleDetail = true;
            } else if (path.startsWith("/legal/")) {
                targetViewId = "view-legal";
                isLegalDetail = true;
            } else if (path === "/panel-aegis-7f3c") {
                targetViewId = "view-admin-login";
            } else {
                targetViewId = "view-404";
            }
        }

        // Hide all view panels
        document.querySelectorAll(".page-view").forEach((el) => {
            el.style.display = "none";
        });

        const targetEl = document.getElementById(targetViewId);
        if (targetEl) {
            targetEl.style.display = "block";
        }

        // Handle Article Detail
        if (isArticleDetail) {
            const slug = path.replace("/artikel/", "").trim();
            renderArticleDetail(slug);
        }

        // Handle Legal Detail
        if (isLegalDetail) {
            const slug = path.replace("/legal/", "").trim();
            renderLegalDetail(slug);
        }

        // Update document title
        if (path === "/") document.title = "PT Aegis Teknologi Nusantara | MRO, Reliability & Asset Monitoring";
        else if (path === "/profil") document.title = "Profil Perusahaan | PT Aegis Teknologi Nusantara";
        else if (path === "/layanan") document.title = "Layanan Rekayasa MRO | PT Aegis Teknologi Nusantara";
        else if (path === "/lab") document.title = "Lab Interaktif | PT Aegis Teknologi Nusantara";
        else if (path === "/artikel") document.title = "Wawasan & Artikel | PT Aegis Teknologi Nusantara";
        else if (path === "/panel-aegis-7f3c") document.title = "Panel Aegis | Sign In";
        else if (targetViewId === "view-404") document.title = "Halaman Tidak Ditemukan | PT Aegis Teknologi Nusantara";
    }

    /* ═════════════════════════════════════════════════════════════════════════
       3. THEME CONTROLLER (Light / Dark Mode with LocalStorage)
       ═══════════════════════════════════════════════════════════════════════ */

    function initTheme() {
        // Default is light theme (clean corporate presentation default)
        const saved = localStorage.getItem("aegis_theme_mode");
        const theme = saved === "dark" ? "dark" : "light";
        setTheme(theme);

        document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const cur = document.documentElement.getAttribute("data-theme") || "light";
                const next = cur === "dark" ? "light" : "dark";
                setTheme(next);
            });
        });
    }

    function setTheme(theme) {
        const root = document.documentElement;
        if (theme === "dark") {
            root.setAttribute("data-theme", "dark");
            localStorage.setItem("aegis_theme_mode", "dark");
        } else {
            root.removeAttribute("data-theme");
            localStorage.setItem("aegis_theme_mode", "light");
        }
        localStorage.removeItem("aegis_theme");

        // Update toggle icons
        document.querySelectorAll(".theme-icon-sun").forEach((el) => {
            el.style.display = theme === "dark" ? "block" : "none";
        });
        document.querySelectorAll(".theme-icon-moon").forEach((el) => {
            el.style.display = theme === "dark" ? "none" : "block";
        });

        // Update particle canvas visibility
        const canvas = document.getElementById("hero-particle-canvas");
        if (canvas) {
            canvas.style.display = theme === "dark" ? "block" : "none";
        }
    }

    /* ═════════════════════════════════════════════════════════════════════════
       4. HEADER SCROLL SHRINK & SCROLLSPY
       ═══════════════════════════════════════════════════════════════════════ */

    function initHeaderScroll() {
        const header = document.querySelector(".site-header");
        let rafId = 0;

        const onScroll = () => {
            const y = window.scrollY || document.documentElement.scrollTop || 0;
            if (header) {
                if (y > 40) {
                    header.setAttribute("data-scrolled", "true");
                } else if (y <= 8) {
                    header.setAttribute("data-scrolled", "false");
                }
            }

            // Scrollspy on home page
            if (currentRoute === "/") {
                const sections = ["hero", "about", "services", "industries", "challenges", "testimonials", "contact"];
                let found = "hero";
                for (const id of sections) {
                    const el = document.getElementById(id);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        if (rect.top <= 120 && rect.bottom >= 120) {
                            found = id;
                            break;
                        }
                    }
                }
                if (found !== activeSectionSpy) {
                    activeSectionSpy = found;
                    updateNavLinks(currentRoute, activeSectionSpy);
                }
            }
        };

        window.addEventListener("scroll", () => {
            if (!rafId) {
                rafId = window.requestAnimationFrame(() => {
                    onScroll();
                    rafId = 0;
                });
            }
        }, { passive: true });
        onScroll();
    }

    /* ═════════════════════════════════════════════════════════════════════════
       5. MOBILE DRAWER NAVIGATION
       ═══════════════════════════════════════════════════════════════════════ */

    function initMobileDrawer() {
        const drawer = document.getElementById("header-drawer");
        const openBtn = document.getElementById("drawer-open-btn");
        const closeBtn = document.getElementById("drawer-close-btn");

        function openDrawer() {
            if (drawer) {
                drawer.style.display = "block";
                document.body.style.overflow = "hidden";
                if (openBtn) openBtn.setAttribute("aria-expanded", "true");
            }
        }

        function closeDrawer() {
            if (drawer) {
                drawer.style.display = "none";
                document.body.style.overflow = "";
                if (openBtn) openBtn.setAttribute("aria-expanded", "false");
            }
        }

        if (openBtn) {
            openBtn.addEventListener("click", () => {
                const isOpen = drawer && drawer.style.display === "block";
                if (isOpen) closeDrawer();
                else openDrawer();
            });
        }

        if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

        // Escape key
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeDrawer();
        });

        // Close when link clicked
        if (drawer) {
            drawer.querySelectorAll("a").forEach((a) => {
                a.addEventListener("click", () => {
                    closeDrawer();
                });
            });
        }
    }

    /* ═════════════════════════════════════════════════════════════════════════
       6. INTERACTIVE CONSTELLATION PARTICLES (Hero Dark Mode)
       ═══════════════════════════════════════════════════════════════════════ */

    function initHeroParticles() {
        const canvas = document.getElementById("hero-particle-canvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0, height = 0, dpr = 1;
        let particles = [];
        let rafId = 0;
        const mouse = { x: null, y: null };
        const PARTICLE_COLORS = ["0, 229, 255", "56, 189, 248", "45, 212, 191", "14, 165, 233"];
        const CONNECTION_DIST = 130;
        const MOUSE_REPEL_DIST = 180;
        const MOUSE_CONNECT_DIST = 180;

        function resize() {
            const parent = canvas.parentElement;
            if (!parent) return;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = parent.clientWidth;
            height = parent.clientHeight;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.max(30, Math.min(100, Math.round((width * height) / 9000)));
            particles = Array.from({ length: count }, (_, idx) => ({
                x: Math.random() * width,
                y: Math.random() * height,
                r: 1.2 + Math.random() * 1.8,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
                phase: Math.random() * Math.PI * 2,
                speed: 1.2 + Math.random() * 1.3,
                color: PARTICLE_COLORS[idx % PARTICLE_COLORS.length],
            }));
        }

        function render(time) {
            if (document.documentElement.getAttribute("data-theme") !== "dark") {
                rafId = requestAnimationFrame(render);
                return;
            }
            ctx.clearRect(0, 0, width, height);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MOUSE_REPEL_DIST && dist > 0.01) {
                        const force = (1 - dist / MOUSE_REPEL_DIST) * 1.4;
                        p.x += (dx / dist) * force;
                        p.y += (dy / dist) * force;
                    }
                }
            }

            ctx.lineWidth = 1;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECTION_DIST) {
                        const alpha = (1 - dist / CONNECTION_DIST) * 0.28;
                        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            if (mouse.x !== null && mouse.y !== null) {
                for (const p of particles) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MOUSE_CONNECT_DIST) {
                        const alpha = (1 - dist / MOUSE_CONNECT_DIST) * 0.45;
                        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha.toFixed(3)})`;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
                ctx.beginPath();
                ctx.fillStyle = "rgba(0, 229, 255, 0.9)";
                ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
                ctx.fill();
            }

            for (const p of particles) {
                const alpha = 0.35 + 0.35 * Math.sin(time * 0.0018 * p.speed + p.phase);
                ctx.beginPath();
                ctx.fillStyle = `rgba(${p.color}, ${alpha.toFixed(3)})`;
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }

            rafId = requestAnimationFrame(render);
        }

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            } else {
                mouse.x = null;
                mouse.y = null;
            }
        });
        window.addEventListener("mouseleave", () => {
            mouse.x = null;
            mouse.y = null;
        });

        resize();
        rafId = requestAnimationFrame(render);
    }

    /* ═════════════════════════════════════════════════════════════════════════
       7. VALUE PROPOSITION TABS (Hero Card)
       ═══════════════════════════════════════════════════════════════════════ */

    function initValuePropTabs() {
        const tabSolusi = document.getElementById("hero-tab-solusi");
        const tabTahapan = document.getElementById("hero-tab-tahapan");
        const contentSolusi = document.getElementById("hero-content-solusi");
        const contentTahapan = document.getElementById("hero-content-tahapan");

        if (!tabSolusi || !tabTahapan) return;

        tabSolusi.addEventListener("click", () => {
            tabSolusi.classList.add("border-[var(--brand-accent-on-dark)]", "text-[var(--on-deep)]");
            tabSolusi.classList.remove("border-transparent", "text-[var(--panel-ink)]");
            tabTahapan.classList.remove("border-[var(--brand-accent-on-dark)]", "text-[var(--on-deep)]");
            tabTahapan.classList.add("border-transparent", "text-[var(--panel-ink)]");

            if (contentSolusi) contentSolusi.style.display = "block";
            if (contentTahapan) contentTahapan.style.display = "none";
        });

        tabTahapan.addEventListener("click", () => {
            tabTahapan.classList.add("border-[var(--brand-accent-on-dark)]", "text-[var(--on-deep)]");
            tabTahapan.classList.remove("border-transparent", "text-[var(--panel-ink)]");
            tabSolusi.classList.remove("border-[var(--brand-accent-on-dark)]", "text-[var(--on-deep)]");
            tabSolusi.classList.add("border-transparent", "text-[var(--panel-ink)]");

            if (contentSolusi) contentSolusi.style.display = "none";
            if (contentTahapan) contentTahapan.style.display = "block";
        });
    }

    /* ═════════════════════════════════════════════════════════════════════════
       8. METRICS COUNT-UP ANIMATION
       ═══════════════════════════════════════════════════════════════════════ */

    function initMetricsAnimation() {
        const counters = document.querySelectorAll("[data-counter-target]");
        if (counters.length === 0) return;

        const DURATION = 1200;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                observer.unobserve(el);

                const target = parseInt(el.getAttribute("data-counter-target"), 10) || 0;
                let started = null;

                function step(now) {
                    if (!started) started = now;
                    const progress = Math.min((now - started) / DURATION, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.round(target * eased);
                    el.textContent = current;
                    if (progress < 1) requestAnimationFrame(step);
                    else el.textContent = target;
                }

                requestAnimationFrame(step);
            });
        }, { threshold: 0.2 });

        counters.forEach((c) => observer.observe(c));
    }

    /* ═════════════════════════════════════════════════════════════════════════
       9. SERVICES TABS & KEYBOARD ACCESSIBILITY
       ═══════════════════════════════════════════════════════════════════════ */

    let activeServiceIndex = 0;

    function initServicesTabs() {
        const tabList = document.getElementById("services-tablist");
        if (!tabList) return;

        const buttons = tabList.querySelectorAll("button[role='tab']");
        buttons.forEach((btn, index) => {
            btn.addEventListener("click", () => switchServiceTab(index));
            btn.addEventListener("keydown", (e) => {
                if (e.key === "ArrowRight") {
                    e.preventDefault();
                    switchServiceTab((index + 1) % buttons.length, true);
                } else if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    switchServiceTab((index - 1 + buttons.length) % buttons.length, true);
                } else if (e.key === "Home") {
                    e.preventDefault();
                    switchServiceTab(0, true);
                } else if (e.key === "End") {
                    e.preventDefault();
                    switchServiceTab(buttons.length - 1, true);
                }
            });
        });

        switchServiceTab(0);
    }

    function switchServiceTab(index, focus = false) {
        activeServiceIndex = index;
        const tabList = document.getElementById("services-tablist");
        if (!tabList) return;

        const buttons = tabList.querySelectorAll("button[role='tab']");
        buttons.forEach((b, i) => {
            const selected = i === index;
            b.setAttribute("aria-selected", selected ? "true" : "false");
            b.tabIndex = selected ? 0 : -1;
            if (selected && focus) b.focus();
        });

        const item = DATA.services[index];
        if (!item) return;

        const codeEl = document.getElementById("services-panel-code");
        const titleEl = document.getElementById("services-panel-title");
        const summaryEl = document.getElementById("services-panel-summary");
        const listEl = document.getElementById("services-panel-scopes");
        const panel = document.getElementById("services-panel");

        if (panel) {
            panel.style.opacity = "0";
            panel.style.transform = "translateY(4px)";
        }

        setTimeout(() => {
            if (codeEl) codeEl.textContent = item.code;
            if (titleEl) titleEl.textContent = item.title;
            if (summaryEl) summaryEl.textContent = item.summary;
            if (listEl) {
                listEl.innerHTML = item.scopes
                    .map(
                        (scope) => `
            <li class="flex gap-3">
              <span style="color: var(--sec-accent);">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="m3 9 4 4 8-8"></path>
                </svg>
              </span>
              <span class="body-sm">${scope}</span>
            </li>`
                    )
                    .join("");
            }
            if (panel) {
                panel.style.transition = "opacity 200ms var(--ease-out), transform 200ms var(--ease-out)";
                panel.style.opacity = "1";
                panel.style.transform = "translateY(0)";
            }
        }, 50);
    }

    /* ═════════════════════════════════════════════════════════════════════════
       10. TESTIMONIALS CAROUSEL
       ═══════════════════════════════════════════════════════════════════════ */

    let testimonialIndex = 0;
    let testimonialTimer = null;
    let isTestimonialPaused = false;

    function initTestimonialsCarousel() {
        const container = document.getElementById("testimonials-card");
        const dotsContainer = document.getElementById("testimonials-dots");
        if (!container || !dotsContainer) return;

        dotsContainer.innerHTML = DATA.testimonials
            .map(
                (_, i) => `
        <button type="button" class="dot ${i === 0 ? "is-active" : ""}" aria-label="Testimoni ${i + 1} dari ${DATA.testimonials.length}"></button>`
            )
            .join("");

        dotsContainer.querySelectorAll(".dot").forEach((dot, idx) => {
            dot.addEventListener("click", () => {
                showTestimonial(idx);
                restartTestimonialTimer();
            });
        });

        container.addEventListener("mouseenter", () => { isTestimonialPaused = true; });
        container.addEventListener("mouseleave", () => { isTestimonialPaused = false; });
        container.addEventListener("focusin", () => { isTestimonialPaused = true; });
        container.addEventListener("focusout", () => { isTestimonialPaused = false; });

        showTestimonial(0);
        restartTestimonialTimer();
    }

    function showTestimonial(idx) {
        testimonialIndex = idx;
        const t = DATA.testimonials[idx];
        if (!t) return;

        const quoteEl = document.getElementById("testimonial-quote");
        const authorEl = document.getElementById("testimonial-author");
        const roleEl = document.getElementById("testimonial-role");

        if (quoteEl) quoteEl.textContent = `“${t.quote}”`;
        if (authorEl) authorEl.textContent = t.author_name;
        if (roleEl) roleEl.textContent = `${t.author_role}, ${t.organization}`;

        const dots = document.querySelectorAll("#testimonials-dots .dot");
        dots.forEach((d, i) => {
            if (i === idx) d.classList.add("is-active");
            else d.classList.remove("is-active");
        });
    }

    function restartTestimonialTimer() {
        if (testimonialTimer) clearInterval(testimonialTimer);
        testimonialTimer = setInterval(() => {
            if (!isTestimonialPaused && document.visibilityState !== "hidden") {
                const next = (testimonialIndex + 1) % DATA.testimonials.length;
                showTestimonial(next);
            }
        }, 7000);
    }

    /* ═════════════════════════════════════════════════════════════════════════
       11. CONTACT FORM WITH REALISTIC SUBMISSION SIMULATION
       ═══════════════════════════════════════════════════════════════════════ */

    function initContactForm() {
        const form = document.getElementById("contact-form");
        if (!form) return;

        const statusEl = document.getElementById("contact-status");
        const submitBtn = document.getElementById("contact-submit-btn");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const honeypot = form.querySelector("[name='website']");
            if (honeypot && honeypot.value) {
                // Honeypot caught bot
                return;
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Mengirim permintaan…";
            }
            if (statusEl) {
                statusEl.textContent = "Mengirim permintaan…";
                statusEl.style.color = "var(--ink-soft)";
            }

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Kirim Permintaan Konsultasi";
                }
                if (statusEl) {
                    statusEl.textContent = "✓ Permintaan Anda terkirim. Tim engineering kami akan menghubungi Anda segera.";
                    statusEl.style.color = "var(--tag-green-fg)";
                }
                form.reset();
            }, 900);
        });
    }

    /* ═════════════════════════════════════════════════════════════════════════
       12. LAB INTERAKTIF — 01 SHIP ANATOMY (Bedah Kapal)
       ═══════════════════════════════════════════════════════════════════════ */

    const SHIP_MACHINERY = [
        {
            id: "main-engine",
            name: "Main Engine",
            role: "Sumber tenaga propulsi utama kapal. Kegagalan di sini menyebabkan kapal blackout atau mati mesin di laut lepas.",
            service: "Marine MRO Consulting + Condition Monitoring",
            sensors: [
                { code: "VIB", name: "Getaran Drive & Non-Drive End" },
                { code: "EXH", name: "Temperatur Gas Buang Tiap Silinder" },
                { code: "CYL", name: "Tekanan Pembakaran Silinder" },
                { code: "OIL", name: "Analisis Viskositas & Kontaminasi Pelumas" },
            ],
            failures: ["Bearing wear", "Injector fouling", "Turbocharger surging", "Scavenge fire risk"],
            highlightBox: [134, 172, 124, 58],
            pins: [
                { code: "VIB", x: 152, y: 190 },
                { code: "EXH", x: 240, y: 190 },
                { code: "CYL", x: 196, y: 184 },
            ],
        },
        {
            id: "generator",
            name: "Diesel Generator (Auxiliary Engine)",
            role: "Penyedia pasokan daya listrik untuk seluruh sistem navigasi, pendingin kargo, dan pompa bantu di kapal.",
            service: "Condition Monitoring & Predictive Maintenance",
            sensors: [
                { code: "TMP", name: "Suhu Belitan Stator & Bearing" },
                { code: "VIB", name: "Getaran Frekuensi Rotasi" },
                { code: "LOD", name: "Keseimbangan Beban Listrik (kW)" },
            ],
            failures: ["Insulation breakdown", "Bearing overheating", "Governor hunting"],
            highlightBox: [260, 186, 60, 46],
            pins: [
                { code: "TMP", x: 274, y: 194 },
                { code: "VIB", x: 306, y: 194 },
            ],
        },
        {
            id: "shaft",
            name: "Poros Propulsi & Stern Tube Bearing",
            role: "Meneruskan daya puntir dari mesin induk ke baling-baling. Misalignment dapat merusak seal dan bantalan poros.",
            service: "MRO & Reliability Consulting (RCA & Alignment)",
            sensors: [
                { code: "ALN", name: "Shaft Alignment & Deflection" },
                { code: "TRQ", name: "Torsi & Thrust Permukaan Poros" },
                { code: "TMP", name: "Suhu Pelumasan Stern Tube Bearing" },
            ],
            failures: ["Misalignment", "Seal leakage", "Stern tube bearing wear"],
            highlightBox: [36, 184, 108, 70],
            pins: [
                { code: "TRQ", x: 112, y: 196 },
                { code: "TMP", x: 76, y: 196 },
            ],
        },
        {
            id: "pumps",
            name: "Pompa Bilga, Ballast & Kompresor",
            role: "Mesin bantu vital untuk stabilitas kapal, penanganan air balas, serta suplai udara bertekanan untuk start engine.",
            service: "Digital MRO (PMS, Work Order & Mobile Inspection)",
            sensors: [
                { code: "VIB", name: "Spektrum Getaran Impeller" },
                { code: "ΔP", name: "Tekanan Diferensial Hisap & Tekan" },
            ],
            failures: ["Kavitasi", "Kerusakan mechanical seal", "Katup kompresor bocor"],
            highlightBox: [324, 194, 60, 38],
            pins: [
                { code: "VIB", x: 340, y: 196 },
                { code: "ΔP", x: 366, y: 196 },
            ],
        },
        {
            id: "bridge",
            name: "Anjungan & Mesin Kemudi (Steering Gear)",
            role: "Pusat komando navigasi armada dan aktuator hidrolik kemudi untuk keselamatan manuver di alur pelayaran.",
            service: "Managed Reliability Service (Class Recommendation Tracking)",
            sensors: [
                { code: "HYD", name: "Tekanan Hidrolik Steering Gear" },
                { code: "LOG", name: "Audit Defect Register & Class Status" },
            ],
            failures: ["Kebocoran sistem hidrolik", "Drifting respon kemudi", "Kegagalan telekomunikasi"],
            highlightBox: [104, 64, 104, 38],
            pins: [
                { code: "HYD", x: 30, y: 238 },
                { code: "LOG", x: 212, y: 66 },
            ],
        },
    ];

    let currentShipMachineryIndex = 0;
    let isShipDataModeOn = false;
    let shipTourInterval = null;

    function initShipAnatomy() {
        const btnDataMode = document.getElementById("ship-toggle-data");
        const btnTour = document.getElementById("ship-toggle-tour");

        if (btnDataMode) {
            btnDataMode.addEventListener("click", () => {
                isShipDataModeOn = !isShipDataModeOn;
                btnDataMode.setAttribute("aria-pressed", isShipDataModeOn ? "true" : "false");
                const pinGroup = document.getElementById("ship-sensor-pins");
                if (pinGroup) {
                    pinGroup.style.opacity = isShipDataModeOn ? "1" : "0";
                }
            });
        }

        if (btnTour) {
            btnTour.addEventListener("click", () => {
                if (shipTourInterval) {
                    clearInterval(shipTourInterval);
                    shipTourInterval = null;
                    btnTour.setAttribute("aria-pressed", "false");
                    btnTour.querySelector("span:last-child").textContent = "Mulai Tur";
                } else {
                    btnTour.setAttribute("aria-pressed", "true");
                    btnTour.querySelector("span:last-child").textContent = "Hentikan Tur";
                    shipTourInterval = setInterval(() => {
                        selectShipMachinery((currentShipMachineryIndex + 1) % SHIP_MACHINERY.length);
                    }, 4500);
                }
            });
        }

        // Attach click events to hotspot SVG elements
        document.querySelectorAll("[data-hotspot-id]").forEach((el) => {
            el.addEventListener("click", () => {
                const id = el.getAttribute("data-hotspot-id");
                const idx = SHIP_MACHINERY.findIndex((m) => m.id === id);
                if (idx !== -1) selectShipMachinery(idx);
            });
        });

        // Attach click events to selector buttons
        document.querySelectorAll("[data-ship-select]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-ship-select"), 10) || 0;
                selectShipMachinery(idx);
            });
        });

        selectShipMachinery(0);
    }

    function selectShipMachinery(index) {
        currentShipMachineryIndex = index;
        const m = SHIP_MACHINERY[index];
        if (!m) return;

        // Update buttons state
        document.querySelectorAll("[data-ship-select]").forEach((b, i) => {
            b.setAttribute("aria-pressed", i === index ? "true" : "false");
        });

        // Update SVG hotspots
        document.querySelectorAll("[data-hotspot-id]").forEach((el) => {
            const isSel = el.getAttribute("data-hotspot-id") === m.id;
            el.setAttribute("data-on", isSel ? "true" : "false");
        });

        // Update highlight box in blueprint
        const hlBox = document.getElementById("ship-highlight-rect");
        if (hlBox) {
            const [x, y, w, h] = m.highlightBox;
            hlBox.setAttribute("x", x);
            hlBox.setAttribute("y", y);
            hlBox.setAttribute("width", w);
            hlBox.setAttribute("height", h);
        }

        // Update sidebar details
        const nameEl = document.getElementById("ship-detail-name");
        const roleEl = document.getElementById("ship-detail-role");
        const serviceEl = document.getElementById("ship-detail-service");
        const sensorsList = document.getElementById("ship-detail-sensors");
        const failuresList = document.getElementById("ship-detail-failures");

        if (nameEl) nameEl.textContent = m.name;
        if (roleEl) roleEl.textContent = m.role;
        if (serviceEl) serviceEl.textContent = m.service;

        if (sensorsList) {
            sensorsList.innerHTML = m.sensors
                .map(
                    (s) => `
          <li>
            <span class="lab-code">${s.code}</span>
            <span class="lab-sensors__name">${s.name}</span>
            <svg viewBox="0 0 96 24" class="lab-spark" aria-hidden="true">
              <path d="M0 12 L16 10 L32 15 L48 8 L64 16 L80 11 L96 13" class="lab-spark__base"></path>
              <path d="M0 12 L16 10 L32 15 L48 8 L64 16 L80 11 L96 13" class="lab-spark__scan"></path>
            </svg>
          </li>`
                )
                .join("");
        }

        if (failuresList) {
            failuresList.innerHTML = m.failures
                .map((f) => `<li>${f}</li>`)
                .join("");
        }
    }

    /* ═════════════════════════════════════════════════════════════════════════
       13. LAB INTERAKTIF — 02 FAILURE SIMULATOR (Simulator Getaran Mesin)
       ═══════════════════════════════════════════════════════════════════════ */

    let simLoad = 60;
    let simWear = 30;
    let simTime = 0;
    let simRafId = 0;

    function initFailureSimulator() {
        const sliderLoad = document.getElementById("sim-slider-load");
        const sliderWear = document.getElementById("sim-slider-wear");
        const loadVal = document.getElementById("sim-load-val");
        const wearVal = document.getElementById("sim-wear-val");

        if (sliderLoad && loadVal) {
            sliderLoad.addEventListener("input", (e) => {
                simLoad = parseFloat(e.target.value);
                loadVal.textContent = Math.round(simLoad) + " %";
                sliderLoad.style.setProperty("--p", ((simLoad - 20) / 80) * 100 + "%");
                updateSimulatorState();
            });
        }

        if (sliderWear && wearVal) {
            sliderWear.addEventListener("input", (e) => {
                simWear = parseFloat(e.target.value);
                wearVal.textContent = Math.round(simWear) + " %";
                sliderWear.style.setProperty("--p", simWear + "%");
                updateSimulatorState();
            });
        }

        // Preset Scenarios
        document.querySelectorAll("[data-sim-preset]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const type = btn.getAttribute("data-sim-preset");
                if (type === "normal") { simLoad = 60; simWear = 30; }
                else if (type === "peak") { simLoad = 95; simWear = 20; }
                else if (type === "worn") { simLoad = 60; simWear = 75; }
                else if (type === "critical") { simLoad = 90; simWear = 92; }

                if (sliderLoad) {
                    sliderLoad.value = simLoad;
                    sliderLoad.style.setProperty("--p", ((simLoad - 20) / 80) * 100 + "%");
                }
                if (sliderWear) {
                    sliderWear.value = simWear;
                    sliderWear.style.setProperty("--p", simWear + "%");
                }
                if (loadVal) loadVal.textContent = Math.round(simLoad) + " %";
                if (wearVal) wearVal.textContent = Math.round(simWear) + " %";

                document.querySelectorAll("[data-sim-preset]").forEach((b) => b.setAttribute("aria-pressed", "false"));
                btn.setAttribute("aria-pressed", "true");

                updateSimulatorState();
            });
        });

        updateSimulatorState();
        startSimWaveform();
    }

    function updateSimulatorState() {
        // Target vibration in mm/s: base + load influence + exponential wear influence
        const vib = 1.6 + simLoad * 0.022 + Math.pow(simWear / 100, 2) * 5.2;
        const temp = Math.round(58 + simLoad * 0.22 + simWear * 0.3);
        const health = Math.max(3, Math.min(100, Math.round(100 - Math.max(0, vib - 2.5) * 13)));

        let tone = "ok";
        let statusText = "Kondisi baik";
        let adviceText = "Lanjutkan pemantauan rutin dan inspeksi visual sesuai jadwal Planned Maintenance System.";

        if (vib > 7.1 || health < 45) {
            tone = "crit";
            statusText = "Mendekati batas alarm ISO";
            adviceText = "Rencanakan inspeksi bearing dan alignment pada jendela operasi terdekat. Hindari pengoperasian beban tinggi.";
        } else if (vib > 4.5 || health < 70) {
            tone = "watch";
            statusText = "Tren kenaikan terdeteksi";
            adviceText = "Jadwalkan analisis spektrum getaran FFT dan uji viskositas pelumas. Rekomendasi dikirim ke tim superintendent.";
        }

        const vibVal = document.getElementById("sim-vib-value");
        const tempVal = document.getElementById("sim-temp-value");
        const healthNum = document.getElementById("sim-health-num");
        const healthGauge = document.getElementById("sim-health-gauge-fill");
        const statusEl = document.getElementById("sim-status-badge");
        const adviceEl = document.getElementById("sim-advice-text");
        const simContainer = document.getElementById("sim-container");

        if (vibVal) vibVal.innerHTML = `${vib.toFixed(1)} <small>mm/s RMS</small>`;
        if (tempVal) tempVal.textContent = `${temp} °C`;
        if (healthNum) healthNum.textContent = health;
        if (healthGauge) {
            // Stroke dasharray 0-100
            healthGauge.style.strokeDasharray = `${health} 100`;
        }
        if (statusEl) {
            statusEl.innerHTML = `<span></span> ${statusText}`;
        }
        if (adviceEl) adviceEl.textContent = adviceText;

        if (simContainer) {
            simContainer.setAttribute("data-tone", tone);
        }
    }

    function startSimWaveform() {
        const path = document.getElementById("sim-waveform-path");
        const dot = document.getElementById("sim-waveform-dot");
        if (!path) return;

        function animate() {
            simTime += 0.12;
            const vib = 1.6 + simLoad * 0.022 + Math.pow(simWear / 100, 2) * 5.2;
            const noiseAmp = 0.08 + (simWear / 100) * 0.35;

            const points = 60;
            let d = "";
            const W = 640;
            const H = 220;
            let lastY = 110;

            for (let i = 0; i < points; i++) {
                const x = (i / (points - 1)) * W;
                // Vibration amplitude maps to curve height
                const wave = Math.sin(i * 0.4 - simTime * 2) * (vib * 8);
                const noise = (Math.sin(i * 1.7 + simTime * 3) + Math.cos(i * 3.1 - simTime)) * (noiseAmp * 14);
                const y = Math.max(20, Math.min(H - 20, 150 - wave - noise));
                d += (i === 0 ? "M" : "L") + `${x.toFixed(1)} ${y.toFixed(1)} `;
                if (i === points - 1) lastY = y;
            }

            path.setAttribute("d", d);
            if (dot) {
                dot.setAttribute("cx", W);
                dot.setAttribute("cy", lastY);
            }

            simRafId = requestAnimationFrame(animate);
        }

        cancelAnimationFrame(simRafId);
        animate();
    }

    /* ═════════════════════════════════════════════════════════════════════════
       14. LAB INTERAKTIF — 03 SAVINGS CALCULATOR (Kalkulator Penghematan)
       ═══════════════════════════════════════════════════════════════════════ */

    let calcAssets = 8;
    let calcDowntimeDays = 12;
    let calcDowntimeCost = 150; // Juta Rp per hari
    let calcDockingCost = 1200;  // Juta Rp per unit per tahun

    function initSavingsCalculator() {
        const inputAssets = document.getElementById("calc-input-assets");
        const sliderAssets = document.getElementById("calc-slider-assets");
        const inputDays = document.getElementById("calc-input-days");
        const sliderDays = document.getElementById("calc-slider-days");
        const inputDayCost = document.getElementById("calc-input-daycost");
        const sliderDayCost = document.getElementById("calc-slider-daycost");
        const inputDockCost = document.getElementById("calc-input-dockcost");
        const sliderDockCost = document.getElementById("calc-slider-dockcost");

        function bind(input, slider, min, max, getter, setter) {
            if (!input || !slider) return;
            slider.addEventListener("input", (e) => {
                const v = parseFloat(e.target.value);
                setter(v);
                input.value = v.toLocaleString("id-ID");
                slider.style.setProperty("--p", ((v - min) / (max - min)) * 100 + "%");
                recalculateSavings();
            });
            input.addEventListener("change", (e) => {
                let v = parseFloat(e.target.value.replace(/\./g, "").replace(",", "."));
                if (isNaN(v)) v = min;
                v = Math.max(min, Math.min(max, v));
                setter(v);
                input.value = v.toLocaleString("id-ID");
                slider.value = v;
                slider.style.setProperty("--p", ((v - min) / (max - min)) * 100 + "%");
                recalculateSavings();
            });
        }

        bind(inputAssets, sliderAssets, 1, 50, () => calcAssets, (v) => { calcAssets = v; });
        bind(inputDays, sliderDays, 1, 40, () => calcDowntimeDays, (v) => { calcDowntimeDays = v; });
        bind(inputDayCost, sliderDayCost, 10, 1000, () => calcDowntimeCost, (v) => { calcDowntimeCost = v; });
        bind(inputDockCost, sliderDockCost, 100, 5000, () => calcDockingCost, (v) => { calcDockingCost = v; });

        const ctaBtn = document.getElementById("calc-cta-btn");
        if (ctaBtn) {
            ctaBtn.addEventListener("click", () => {
                // Build summary note for contact form
                const dtSaved = calcAssets * calcDowntimeDays * calcDowntimeCost * 0.3;
                const dkSaved = calcAssets * calcDockingCost * 0.25;
                const total = dtSaved + dkSaved;
                const summary = `Estimasi awal dari kalkulator Lab Interaktif: ${calcAssets} unit kapal/aset kritis, ` +
                    `${calcDowntimeDays} hari downtime/tahun, biaya downtime Rp ${calcDowntimeCost} jt/hari, docking Rp ${calcDockingCost} jt/unit. ` +
                    `Potensi penghematan: ${formatRupiah(total)}/tahun (${formatRupiah(dtSaved)} dari downtime & ${formatRupiah(dkSaved)} dari docking).`;

                navigateTo("/", "contact");
                setTimeout(() => {
                    const msgField = document.getElementById("contact-message");
                    if (msgField) {
                        msgField.value = summary;
                        msgField.focus();
                    }
                }, 120);
            });
        }

        recalculateSavings();
    }

    function formatRupiah(juta) {
        if (juta >= 1000000) return `Rp ${(juta / 1000000).toFixed(2).replace(".", ",")} triliun`;
        if (juta >= 1000) return `Rp ${(juta / 1000).toFixed(2).replace(".", ",")} miliar`;
        return `Rp ${Math.round(juta).toLocaleString("id-ID")} juta`;
    }

    function recalculateSavings() {
        const downtimeNow = calcAssets * calcDowntimeDays * calcDowntimeCost;
        const dockingNow = calcAssets * calcDockingCost;
        const downtimeSaved = downtimeNow * 0.3;
        const dockingSaved = dockingNow * 0.25;
        const total = downtimeSaved + dockingSaved;

        const totalEl = document.getElementById("calc-total-savings");
        const dtSavedEl = document.getElementById("calc-downtime-saved-val");
        const dkSavedEl = document.getElementById("calc-docking-saved-val");
        const splitBarDt = document.getElementById("calc-split-bar-dt");
        const splitBarDk = document.getElementById("calc-split-bar-dk");

        if (totalEl) totalEl.textContent = formatRupiah(total) + " / tahun";
        if (dtSavedEl) dtSavedEl.textContent = formatRupiah(downtimeSaved);
        if (dkSavedEl) dkSavedEl.textContent = formatRupiah(dockingSaved);

        const dtPct = total > 0 ? (downtimeSaved / total) * 100 : 50;
        const dkPct = 100 - dtPct;
        if (splitBarDt) splitBarDt.style.width = dtPct + "%";
        if (splitBarDk) splitBarDk.style.width = dkPct + "%";

        // Comparison bars
        const barDtNow = document.getElementById("calc-bar-dt-now");
        const barDtPot = document.getElementById("calc-bar-dt-pot");
        const barDkNow = document.getElementById("calc-bar-dk-now");
        const barDkPot = document.getElementById("calc-bar-dk-pot");

        if (barDtNow) barDtNow.textContent = formatRupiah(downtimeNow);
        if (barDtPot) barDtPot.textContent = formatRupiah(downtimeNow - downtimeSaved);
        if (barDkNow) barDkNow.textContent = formatRupiah(dockingNow);
        if (barDkPot) barDkPot.textContent = formatRupiah(dockingNow - dockingSaved);
    }

    /* ═════════════════════════════════════════════════════════════════════════
       15. ARTICLES LIST & DETAIL VIEWS
       ═══════════════════════════════════════════════════════════════════════ */

    let articleSearchQuery = "";
    let articleCategoryFilter = "all";

    function initArticlesFilter() {
        const searchInput = document.getElementById("article-search-input");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                articleSearchQuery = e.target.value.toLowerCase().trim();
                renderArticlesList();
            });
        }

        document.querySelectorAll("[data-article-cat]").forEach((btn) => {
            btn.addEventListener("click", () => {
                articleCategoryFilter = btn.getAttribute("data-article-cat");
                document.querySelectorAll("[data-article-cat]").forEach((b) => b.classList.remove("is-active"));
                btn.classList.add("is-active");
                renderArticlesList();
            });
        });

        renderArticlesList();
    }

    function renderArticlesList() {
        const grid = document.getElementById("articles-cards-grid");
        const countEl = document.getElementById("articles-count-note");
        if (!grid) return;

        const filtered = DATA.articles.filter((art) => {
            const matchCat = articleCategoryFilter === "all" || art.category_slug === articleCategoryFilter;
            const matchQuery = !articleSearchQuery ||
                art.title.toLowerCase().includes(articleSearchQuery) ||
                art.excerpt.toLowerCase().includes(articleSearchQuery);
            return matchCat && matchQuery;
        });

        if (countEl) countEl.textContent = `${filtered.length} artikel`;

        if (filtered.length === 0) {
            grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-500">
          <p class="font-heading text-lg font-bold text-[var(--ink)]">Tidak ada artikel yang cocok</p>
          <p class="mt-2 text-sm">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
        </div>`;
            return;
        }

        grid.innerHTML = filtered
            .map(
                (art) => `
        <article class="card card--outline card-hover flex flex-col justify-between">
          <div>
            ${renderArticleBannerSvg(art.banner_key, "card")}
            <div class="mt-4 flex items-center justify-between">
              <span class="tag tag--teal text-xs">${art.category}</span>
              <span class="mono-note text-xs">${art.read_time}</span>
            </div>
            <h3 class="h3 mt-3">
              <a href="#/artikel/${art.slug}" class="hover:text-[var(--brand-accent)] transition-colors">${art.title}</a>
            </h3>
            <p class="body-sm mt-3 text-slate-500 line-clamp-3">${art.excerpt}</p>
          </div>
          <div class="mt-6 flex items-center justify-between border-t border-[var(--sec-line)] pt-4 text-xs font-mono text-[var(--ink-mute)]">
            <span>${art.published_at}</span>
            <a href="#/artikel/${art.slug}" class="font-bold text-[var(--sec-accent)] hover:underline">Baca selengkapnya →</a>
          </div>
        </article>`
            )
            .join("");
    }

    function renderArticleBannerSvg(variant, ratio = "card") {
        const h = ratio === "hero" ? 340 : 200;
        const strokeGraph = "var(--brand-graph, #5ec4d6)";
        const strokeAccent = "var(--sec-accent, #00788f)";

        if (variant === "chart") {
            return `
        <div class="overflow-hidden rounded-[var(--r-sm)] bg-[var(--surface-sunken)] p-2">
          <svg viewBox="0 0 640 320" class="w-full h-auto" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Grafik keandalan">
            <g stroke="currentColor" stroke-width="1" opacity="0.18">
              <path d="M64 56 H600 M64 104 H600 M64 152 H600 M64 200 H600 M64 248 H600" />
              <path d="M64 56 V248 M198 56 V248 M332 56 V248 M466 56 V248 M600 56 V248" />
            </g>
            <path d="M64 248 H600" stroke="currentColor" stroke-width="1.5" opacity="0.7" />
            <path d="M64 170 H600" stroke="${strokeAccent}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.9" />
            <path d="M64 96 C140 104 176 132 240 132 C316 132 348 176 412 196 C470 214 512 232 600 244" stroke="currentColor" stroke-width="2" opacity="0.9" />
            <circle cx="486" cy="219" r="6" fill="none" stroke="${strokeAccent}" stroke-width="2" />
          </svg>
        </div>`;
        }

        if (variant === "network") {
            return `
        <div class="overflow-hidden rounded-[var(--r-sm)] bg-[var(--surface-sunken)] p-2">
          <svg viewBox="0 0 640 320" class="w-full h-auto" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Jaringan aset">
            <g stroke="currentColor" stroke-width="1" opacity="0.35">
              <line x1="120" y1="82" x2="232" y2="140" />
              <line x1="232" y1="140" x2="320" y2="160" />
              <line x1="320" y1="160" x2="424" y2="94" />
              <line x1="320" y1="160" x2="508" y2="194" />
              <line x1="320" y1="160" x2="200" y2="234" />
              <line x1="200" y1="234" x2="396" y2="242" />
              <line x1="424" y1="94" x2="560" y2="120" />
            </g>
            <circle cx="120" cy="82" r="8" fill="var(--surface-sunken)" stroke="${strokeAccent}" stroke-width="2" />
            <circle cx="232" cy="140" r="7" fill="var(--surface-sunken)" stroke="currentColor" stroke-width="1.5" />
            <circle cx="320" cy="160" r="15" fill="${strokeAccent}" stroke="none" />
            <circle cx="424" cy="94" r="7" fill="var(--surface-sunken)" stroke="currentColor" stroke-width="1.5" />
            <circle cx="508" cy="194" r="9" fill="var(--surface-sunken)" stroke="${strokeGraph}" stroke-width="2" />
            <circle cx="200" cy="234" r="6" fill="var(--surface-sunken)" stroke="currentColor" stroke-width="1.5" />
            <circle cx="396" cy="242" r="6" fill="var(--surface-sunken)" stroke="currentColor" stroke-width="1.5" />
            <circle cx="560" cy="120" r="6" fill="var(--surface-sunken)" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>`;
        }

        // Default circuit
        return `
      <div class="overflow-hidden rounded-[var(--r-sm)] bg-[var(--surface-sunken)] p-2">
        <svg viewBox="0 0 640 320" class="w-full h-auto" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Sirkuit teknis">
          <g stroke="currentColor" stroke-width="1" opacity="0.4">
            <path d="M40 96 H168 L204 132 H356 L392 168 H600" />
            <path d="M40 200 H132 L168 236 H300 L336 200 H600" />
            <path d="M64 40 V280 M576 40 V280" opacity="0.25" />
          </g>
          <path d="M40 160 H244 L280 196 H520" stroke="${strokeAccent}" stroke-width="1.5" opacity="0.9" />
          <circle cx="40" cy="96" r="5" fill="currentColor" opacity="0.6" />
          <circle cx="600" cy="168" r="5" fill="currentColor" opacity="0.6" />
          <circle cx="520" cy="196" r="5" fill="${strokeAccent}" />
          <circle cx="244" cy="160" r="4" fill="currentColor" />
          <circle cx="356" cy="132" r="4" fill="currentColor" />
        </svg>
      </div>`;
    }

    function renderArticleDetail(slug) {
        const art = DATA.articles.find((a) => a.slug === slug);
        const container = document.getElementById("article-detail-content");
        if (!container) return;

        if (!art) {
            container.innerHTML = `
        <div class="py-16 text-center">
          <h1 class="h2">Artikel Tidak Ditemukan</h1>
          <p class="lead mt-4">Artikel yang Anda cari tidak tersedia atau belum diterbitkan.</p>
          <a href="#/artikel" class="btn btn--primary mt-8">Kembali ke Daftar Artikel</a>
        </div>`;
            return;
        }

        document.title = `${art.title} | PT Aegis Teknologi Nusantara`;

        container.innerHTML = `
      <div class="mb-8">
        <a href="#/artikel" class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sec-accent)] hover:underline mb-6">
          ← Kembali ke Semua Artikel
        </a>
        <div class="flex flex-wrap items-center gap-3">
          <span class="tag tag--teal">${art.category}</span>
          <span class="mono-note">${art.read_time}</span>
          <span class="mono-note">• Dipublikasikan ${art.published_at}</span>
        </div>
        <h1 class="h2 mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">${art.title}</h1>
      </div>

      <div class="mb-10">
        ${renderArticleBannerSvg(art.banner_key, "hero")}
      </div>

      <div class="prose max-w-none text-base sm:text-lg leading-relaxed">
        ${art.content}
      </div>

      <div class="mt-14 pt-8 border-t border-[var(--sec-line)]">
        <p class="index-label">Topik Terkait</p>
        <div class="chip-row mt-3">
          ${art.tags.map((t) => `<span class="chip">${t}</span>`).join("")}
        </div>
      </div>

      <div class="mt-12 rounded-[var(--r)] bg-[var(--surface-muted)] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p class="font-heading font-bold text-lg text-[var(--ink)]">Ingin mendiskusikan topik ini untuk aset Anda?</p>
          <p class="text-sm text-slate-500 mt-1">Tim reliability engineer Aegis siap membantu membedah tantangan teknis operasi Anda.</p>
        </div>
        <a href="#/#contact" class="btn btn--primary flex-none">Jadwalkan Diskusi</a>
      </div>
    `;
    }

    function renderLegalDetail(slug) {
        const doc = DATA.legal[slug];
        const container = document.getElementById("legal-detail-content");
        if (!container) return;

        if (!doc) {
            container.innerHTML = `
        <div class="py-16 text-center">
          <h1 class="h2">Dokumen Tidak Ditemukan</h1>
          <p class="lead mt-4">Dokumen legal ini belum tersedia atau sudah tidak aktif.</p>
          <a href="#/" class="btn btn--primary mt-8">Kembali ke Beranda</a>
        </div>`;
            return;
        }

        document.title = `${doc.title} | PT Aegis Teknologi Nusantara`;

        container.innerHTML = `
      <header class="rule pt-8 mb-8">
        <p class="kicker">Dokumen Legal</p>
        <h1 class="h2 mt-4 text-3xl sm:text-4xl font-bold">${doc.title}</h1>
        <p class="mono-note mt-3">Terakhir diperbarui ${doc.updated_at}</p>
      </header>
      <div class="prose max-w-none leading-relaxed">
        ${doc.content}
      </div>
    `;
    }

    /* ═════════════════════════════════════════════════════════════════════════
       16. INITIALIZATION & DOM READY
       ═══════════════════════════════════════════════════════════════════════ */

    document.addEventListener("DOMContentLoaded", () => {
        initTheme();
        initHeaderScroll();
        initMobileDrawer();
        initHeroParticles();
        initValuePropTabs();
        initMetricsAnimation();
        initServicesTabs();
        initTestimonialsCarousel();
        initContactForm();
        initShipAnatomy();
        initFailureSimulator();
        initSavingsCalculator();
        initArticlesFilter();

        // Listen to hash changes
        window.addEventListener("hashchange", handleRoute);
        handleRoute();
    });

})();
