let info = {
  name: "Muhammad Syarif Hidayatullah",
  logo_name: "dayatsyarif",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Halo, saya Muhammad Syarif Hidayatullah, seorang web developer dengan pengalaman lebih dari 3 tahun dalam menggunakan Laravel sebagai backend dan Vue.js sebagai frontend untuk mengembangkan software. Saya suka melakukan riset tentang teknologi baru dan berusaha memahami serta mengevaluasi kelebihannya, sehingga saya dapat menentukan kapan teknologi tersebut layak digunakan. Dengan pengetahuan yang saya miliki, saya terbiasa membuat proyek web dan REST API yang terintegrasi dengan database menggunakan Laravel.",
  links: {
    linkedin: "https://www.linkedin.com/in/m-syarif-hidayatullah-a45a27193/",
    github: "https://github.com/syarifmuhammad",
  },
  education: [
    {
      name: "INSTITUT TEKNOLOGI TELKOM SURABAYA",
      place: "Surabaya",
      date: "2020 - 2024",
      degree: "S1 Rekayasa Perangkat Lunak",
      gpa: "3.9/4.0",
      description:
        "",
      skills: [
        "Software Engineering",
        "Web Programming",
        "Front-end developing",
      ]
    },
  ],
  experience: [
    {
      name: "CV COMPUTER MEDIA UTAMA",
      place: "Kotabaru, Kalimantan Selatan",
      date: "2019 - Sekarang",
      position: "Fullstack Web Developer",
      description: "Menjadi seorang full stack engineer, mulai dari perencanaan, pembuatan, testing, hingga deployment di beberapa project yang diberikan ke CV Computer Media Utama",
      skills: ["HTML5", "CSS3", "Bootstrap", "JQuery", "JavaSript", "PHP", "Laravel", "VueJS"]
    },
    {
      name: "Student Staff SSC Kampus Telkom University Surabaya",
      place: "Surabaya, Jawa Timur",
      date: "2023 - 2024",
      position: "Fullstack Web Developer",
      description: "Pembuatan beberapa web layanan di kampus seperti e-learning, layanan mahasiswa, portfolio kampus telkom university surabaya",
      skills: ["HTML5", "CSS3", "Bootstrap", "JQuery", "JavaSript", "PHP", "Laravel", "VueJS", "Moodle LMS", "Wordpress"]
    },
    {
      name: "UKM Coder ITTelkom Surabaya",
      place: "Surabaya",
      date: "2021 - 2022",
      position: "Ketua Divisi Web Developer",
      description: "Memberikan materi mingguan terkait web development khususnya dengan bahasa pemrograman PHP dan Javascript",
      skills: ["Javascript", "Laravel", "VueJS", "NodeJS"]
    },
  ],
  skills: [
    {
      title: "Language",
      info: [
        "PHP", "Javascript", "Go", "Java"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5", "CSS3", "Javascript"],
      icon: "fa fa-cubes"
    },
    {
      title: "Framework",
      info: ["Vue", "Laravel", "NodeJS", "Bootstrap", "Tailwind"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio_design: [
    // {
    //   name: "Keep it Green",
    //   title: "UI/UX Design",
    //   pictures: [
    //     {
    //       img: require("./src/assets/designs/Keep it green/cover.webp"),
    //       title: "MoodBoard"
    //     },
    //     {
    //       img: require("./src/assets/designs/Keep it green/show.webp"),
    //       title: "show"
    //     },
    //   ],
    //   technologies: ["Figma", "Photoshop"],
    //   category: "Visual Design",
    //   github: "",
    //   date: "Jan, 2022",
    //   visit: "",
    //   description:
    //     ""
    // },
  ],
  portfolio: [
    {
      name: "Tukarjual.com",
      pictures: [
        {
          img: require("./src/assets/portfolio/tukarjual/1.webp")
        },
        {
          img: require("./src/assets/portfolio/tukarjual/2.webp")
        },
        {
          img: require("./src/assets/portfolio/tukarjual/3.webp")
        },
        {
          img: require("./src/assets/portfolio/tukarjual/4.webp")
        },
      ],
      technologies: ["VueJS", "Bootstrap", "Laravel", "MySQL", "REST API", "Google Maps API"],
      category: "Web App",
      date: "2021 - Sekarang",
      github: null,
      visit: "https://tukarjual.com",
      description:
        " Tukarjual.com adalah web app ecommerce, namun saat ini belum bisa dipergunakan karena dalam keadaan maintenance, untuk penambahan fitur setelah percobaan beberapa bulan sebelumnya "
    },
    {
      name: "SIPAKTUSARAH",
      pictures: [
        {
          img: require("./src/assets/portfolio/sipaktusarah/1.png")
        },
        {
          img: require("./src/assets/portfolio/sipaktusarah/2.png")
        },
        {
          img: require("./src/assets/portfolio/sipaktusarah/3.png")
        },
      ],
      technologies: ["VueJS", "Laravel", "MySQL", "Bootstrap", "PHPOffice/PHPWord"],
      category: "Web App",
      date: "Jun, 2022 - 6 Bulan",
      github: null,
      visit: "sipaktusarah.com",
      description:
        " Sistem Pelayanan Administrasi Kecamatan Tuntas di Desa dan Kelurahan : Untuk manajemen surat antar desa atau kelurahan dengan kecamatan "
    },
    {
      name: "Point Of Sales",
      pictures: [
        {
          img: require("./src/assets/portfolio/pointofsales/1.png")
        },
        {
          img: require("./src/assets/portfolio/pointofsales/2.png")
        },
        {
          img: require("./src/assets/portfolio/pointofsales/3.png")
        },
        {
          img: require("./src/assets/portfolio/pointofsales/4.jpg")
        },
      ],
      technologies: ["Java", "Springboot", "Thymeleaf", "JPA", "MySQL", "JQuery"],
      category: "Web App",
      date: "Mar, 2022 - 21 hari",
      github:
        "https://github.com/syarifmuhammad/pointofsales.git",
      visit: null,
      description:
        " Aplikasi POS web based dengan java springboot untuk final project di Hackathon In BCA 2021 "
    },
  ],
};

export default info;
