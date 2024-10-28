"use client";
import Image from "next/image";
import Link from 'next/link';
import EcoFooter from "./components/EcoFooter";
import Blog from "./components/Blog";
import { UserAuth } from "./context/authContext";
import SearchBar from "./components/SearchBar";


export default function Home({ auth }) {
  const { currentUser, googleSignIn } = UserAuth();

  return (
    <>
      <Backgrund />
      {/* big size header */}
      <header className="flex flex-col items-center relative h-screen w-full">
        <div className="z-10 h-full min-w-full container px-4 md:px-8">
          {/* search icon */}
          <div className="mt-6 sm:mt-8 lg:w-3/5">
            <SearchBar />
          </div>
          {/* main item */}
          <div className="w-full mt-6 sm:mt-8 md:flex items-center">
            <Image
              src={`/quote.png`}
              width="4000"
              height="800"
              alt="quote"
              className="md:w-1/2 lg:w-3/5 md:pe-8"
            />
            <div className="flex flex-col items-start mt-4 sm:mt-6 md:mt-0">
              <div className="text-sm leading-4 sm:leading-5 backdrop-blur-sm font-normal font-sans">
                &quot;<span className="font-semibold">FusionForge</span> :
                perusahaan rintisan sistem informasi berbasis teknologi.
                Didirikan untuk mengatasi berbagai masalah lingkungan dengan
                kolaborasi dan mendukung keberlanjutan.&quot;
              </div>
              <p className="mt-2 sm:mt-4 text-xl font-sans font-bold">
                Mulai Swapping Sekarang !
              </p>
              <Link
                href={currentUser ? "/home" : "/"}
                onClick={currentUser ? null : () => googleSignIn()}
                className="rounded-xl mt-3 py-1 sm:py-2 px-2 sm:px-4 bg-emerald-950 shadow-gray-600 shadow-md text-white hover:bg-emerald-700 hover:-translate-y-2 transition duration-300 ease-in-out focus:outline-2 focus:outline-offset-2coursor-pointer"
              >
                Mulai <strong>SWAPPING</strong>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="px-4 md:px-20 py-6 md:py-12 bg-neat-50 flex flex-col md:flex-row items-center justify-center">
          <h2 className="text-sm sm:mr-12 md:text-xl md:font-bold text-opacity-5">Dipercayai oleh:</h2>
          <div className="flex items-center gap-8">
            {sponsors.map((sponsor) => (
              <Image
                key={sponsor}
                alt={sponsor}
                loading="lazy"
                height="100"
                width="100"
                className="w-10 sm:w-16 lg:w-auto"
                src={`/company/${sponsor}.svg`}
              />
            ))}
          </div>
        </section>
        <section className="backdrop-blur-xl text-neat-50 py-2 sm:py-6 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl text-center">
            <strong>Fokus</strong> Kami
          </h2>
          <div className="flex my-4 max-w-full md:overflow-auto">
            <p className="font-mono text-xs md:text-md lg:text-xl text-center px-1 sm:px-3 md:px-5 border-white border-r-2">
              Fasilitator & Integrator
            </p>
            <p className="font-mono text-xs md:text-md lg:text-xl text-center px-1 sm:px-3 md:px-5 border-white border-r-2">
              Pemanfaatan Maksimal
            </p>
            <p className="font-mono text-xs md:text-md lg:text-xl text-center px-1 sm:px-3 md:px-5 border-white border-r-2">
              Support Pemerintah
            </p>
            <p className="font-mono text-xs md:text-md lg:text-xl text-center px-1 sm:px-3 md:px-5">
              Bagian ekonomi sirkular
            </p>
          </div>
        </section>
        <section className="px-2 sm:px-12 py-4 md:py-12 flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl">
            <strong>Visi</strong> Kami
          </h2>
          <p className="text-center md:font-thin md:text-xl max-w-4xl leading-6">
            &quot;EcoSwap: Menghubungkan <strong>produsen</strong> dan <strong>pengelola</strong> sampah untuk
            memaksimalkan nilai sampah dengan teknologi&quot;
          </p>
        </section>
        <section className="sm:px-12 py-4 sm:py-12 grid gap-2 sm:gap-6 grid-cols-1 md:grid-cols-2 bg-neat-50">
          <h2 className="col-span-2 text-emerald-950 text-2xl sm:text-4xl text-center">
            <strong>Misi</strong> Kami
          </h2>
          <Image
            loading="lazy"
            width="500"
            height="400"
            alt="misi kami"
            src={`/real/misi-kami.webp`}
            className="w-full aspect-[2.17]"
          />
          <div className="w-full flex flex-col text-neutral-800">
            <ul
              role="list"
              className="text-sm leading-4 sm:leading-6 flex flex-col gap-2 px-2"
            >
              {missions.map((mission) => (
                <li key={mission} className="flex gap-1 sm:gap-3 text-pretty md:text-lg">
                  <Image
                    loading="lazy"
                    width="1"
                    height="1"
                    src={`/icon/circle-check.svg`}
                    alt="ckeck"
                    className="w-4 self-start mt-1"
                  />
                  {mission}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="text-stone-200 px-4 sm:px-12 py-4 sm:py-12 bg-accent">
          <h2 className="text-2xl font-extrabold sm:text-center">
            Tentang Kami
          </h2>
          <div className="mt-2 text-xs sm:text-base leading-4 max-md:max-w-full">
            Didirikan pada 2024, EcoSwap adalah platform digital yang
            memfasilitasi pertukaran sampah antara produsen dan pengelola
            limbah, memungkinkan interaksi untuk penggunaan kembali limbah
            produksi.
          </div>
          <div className="flex gap-6 my-6 max-md:flex-col items-center justify-center">
            {abouts.map((about, index) => (
              <div key={index} className="flex flex-col font-semibold items-center">
                <Image src={`/about/${about.src}.svg`} alt={about.text} width="100" height="100" className="w-10 h-10 md:w-20 md:h-20" />
                <p>{about.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-4 sm:px-12 py-6 sm:py-12 bg-neat-50">
          <Peran />
        </section>
        <section className="flex flex-col self-stretch px-4 sm:px-12 py-4 sm:py-12">
          <h2 className="text-2xl font-semibold leading-6 text-green-950 max-md:max-w-full">
            Apa yang mereka <span className="font-bold">katakan</span> tentang
            EcoSwap?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {testimonies.map((testimony, index) => (
              <div key={index} className="flex flex-col text-base leading-4 p-4 rounded-xl bg-neat-50 text-green-950">
                <div className="flex gap-4 mb-2">
                  <Image
                    loading="lazy"
                    width="100"
                    height="100"
                    src={`/real/${testimony.src}.webp`}
                    alt={testimony.title}
                    className="flex-intial w-12 rounded-full shadow-sm shadow-slate-700"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimony.title}</h3>
                    <p className="mt-0 font-light text-xs">{testimony.job}</p>
                  </div>
                </div>
                <p className="text-sm">{testimony.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-4 sm:px-6 text-xl sm:text-2xl flex flex-col justify-center items-center min-h-min py-6 relative overflow-hidden  text-white">
          <div className="text-xl sm:text-2xl flex flex-col justify-center items-center">
            <Image
              layout="fill"
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc421167f283169d2bcfee7ec33a9ff51bb9423d98789ae261996dbd63bab0cd?apiKey=81aa3398288b425cae501e07d8c56af5&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative leading-6 sm:leading-8 text-center max-md:max-w-full italic">
              &quot;Ancaman terbesar bagi planet kita adalah? <span className="text-dark">keyakinan bahwa ada
                orang lain yang akan menyelamatkannya.&quot;
                <span className="font-semibold">Robert Swan</span></span>
            </div>
            <p className="relative text-base md:text-xl font-bold text-accent mt-4 sm:mt-6">
              Mari menjadi bagian dari perubahan
            </p>
            <Link
              href={currentUser ? "/home" : "/"}
              onClick={currentUser ? null : () => googleSignIn()}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:text-white duration-300 relative justify-center px-4 sm:px-6 py-1 sm:py-4 mt-4 sm:mt-6 rounded-md bg-stone-200 text-neutral-800">
              Mulai <span className="font-semibold">SWAPPING</span>
            </Link>

          </div>
        </section>
        <section className="flex flex-col px-4 sm:px-12 py-4 sm:py-12 bg-neat-50 overflow-x-hidden">
          <Blog />
        </section>
      </main>

    </>
  );
}


const Backgrund = () => {

  const bgTrashs = ["200", "446", "617", "756", "882", "996", "1096", "1213", "1281", "1346", "1376", "1400"];
  const images = bgTrashs.map((bg) => ({
    src: `/bg-sampah/sampah_y8vgvm_c_scale,w_${bg}.png`,
    width: parseInt(bg),
    height: parseInt(bg),
  }));

  const srcbgTrash = images.map((image) => `${image.src} ${image.width}w`).join(", ");
  // console.log(srcbgTrash);
  return (
    <img
      className="fixed h-screen object-cover object-top place-self-start size-full -z-10 bg-neat-50 bg-opacity-50"
      loading="lazy"
      srcSet={srcbgTrash}
      src={images[0].src}
      alt="background sampah"
    />
  );
};

const sponsors = ["meta", "google", "netflix", "coca-cola"];

const missions = [
  "Platform online untuk produsen dan pengelola sampah bertukar sumber daya secara efisien",
  "Mendorong inovasi teknologi untuk meningkatkan kualitas dan nilai limbah",
  "Mengadakan pelatihan untuk produsen dan pengelola limbah guna memperkenalkan praktik ramah lingkungan",
  "Menjadi mitra strategis dalam mengembangkan regulasi yang mendukung ekonomi sirkular dan perlindungan lingkungan",
  "Membangun kemitraan dengan lembaga dan perusahaan yang berkomitmen pada pembangunan berkelanjutan",
];

const abouts = [
  { src: "globe", text: "Cakupan Seluruh Indonesia" },
  { src: "people-group", text: "20,000 Pengguna Aktif" },
  { src: "hand-holding-money", text: "500 Ton Sampah Berbayar" },
  { src: "money-bill-transfer", text: "50,000 Transaksi Berbayar" },
];

const poinPerans = [
  { title: "📈 Memanfaatkan Limbah Secara Maksimal", paragraf: "Memanfaatkan sampah bernilai tambah untuk kesejahteraan masyarakat" },
  { title: "📉 Mengurangi Limbah", paragraf: "Menyediakan fasilitas jual beli sampah antara produsen dan pengelola untuk penggunaan yang optimal" },
  { title: "👀 Bentuk Promosi Daur Ulang Sampah", paragraf: "Mendorong kesadaran akan daur ulang dan mendukung program lingkungan pemerintah melalui transaksi sampah" }
];

const Peran = () => {
  return (
    <>
      <h2 className="text-center sm:mb-2 sm:col-span-2 lg:mb-8 text-2xl leading-6 text-emerald-950 max-md:max-w-full">
        Peran Kami <span className="font-bold">Terhadap Lingkungan</span>
      </h2>
      <div className="container sm:flex gap-2 lg:gap-4">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e9011f02b8b85816201350feb5324e1ecf2266cfff665859015ffcb1690cd099?apiKey=81aa3398288b425cae501e07d8c56af5&"
          className="sm:w-1/2 aspect-video my-auto cursor-pointer"
        />
        <div className="flex flex-col gap-4 my-4 text-base lg:text-xl">
          {poinPerans.map((poinPeran, index) => (
            <div key={index} className="max-md:max-w-full">
              <h3 className="font-bold">{poinPeran.title}</h3>
              <p>{poinPeran.paragraf}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const testimonies = [
  {
    src: "testimony1",
    title: "Teresia Amelia",
    job: "The Ratia Company",
    desc: "Transaksi limbah jadi lebih mudah dan bermanfaat, aplikasi ini benar-benar mengubah cara kami mengelola limbah!",
  },
  {
    src: "testimony2",
    title: "Jennifer Tandy",
    job: "The Jen's Preneur",
    desc: "Aplikasi ini membantu memanfaatkan limbah per businesses dengan transaksi yang efisien, luar biasa!",
  },
  {
    src: "testimony3",
    title: "Leo Franks",
    job: "Max Healthy",
    desc: "Canggih, aplikasi ini memberikan manfaat yang lebih bermanfaat dari sampah organik",
  },
];