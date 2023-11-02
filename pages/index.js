import Navbar from "./components/navbar";
import { useState, useEffect } from "react";

const images = ["/mie_ayam.jpg", "/mie_ayam2.jpg"];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Navbar />
      <div className="flex items-center justify-center">
        <h1 style={{ fontSize: "3rem", fontFamily: "cursive", color: "red" }}>
          MIE AYAM FIRE PAK JOKO
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <h1 className="fw display-7">by: Muhammad Rifqi Zaidan</h1>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ position: "relative" }}
      >
        <button className="arrow arrow-left" onClick={handlePrevClick}>
          {"<"}
        </button>
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Slideshow"
              className={`image ${
                currentImageIndex === index ? "visible" : "hidden"
              }`}
            />
          ))}
        </div>
        <button className="arrow arrow-right" onClick={handleNextClick}>
          {">"}
        </button>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ marginBottom: "-60px" }}
      >
        <h1 style={{ fontSize: "3rem" }}>Mengapa Harus Mie Ayam Pak Joko?</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="icon-text">
          <img src="/unique.png" alt="Icon 1" className="icon" />
          <span
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            UNIK
          </span>
        </div>
        <div className="icon-text">
          <img src="/delicious.png" alt="Icon 2" className="icon" />
          <span
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            ENAK
          </span>
        </div>
        <div className="icon-text">
          <img src="/cheap.png" alt="Icon 3" className="icon" />
          <span
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            MURAH
          </span>
        </div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ marginBottom: "10px", marginTop: "-100px" }}
      >
        <h1 style={{ fontSize: "3rem" }}>Produk Kami</h1>
      </div>
      <div className="produk">
        <div className="produk-item">
          <img src="/mieayam2.jpg" alt="Produk 1" className="produk-img" />
          <p className="produk-text">Mie Ayam Biasa</p>
          <p className="produk-description">
            Perpaduan Mie dengan Daging Ayam beserta sayur sayuran dengan kuah
            dari rempah pilihan
          </p>
          <p className="produk-price">Rp 20.000</p>
        </div>
        <div className="produk-item">
          <img src="/mieayam1.png" alt="Produk 2" className="produk-img" />
          <p className="produk-text">Mie Ayam Api</p>
          <p className="produk-description">
            Mie Ayam dengan pilihan topping yang lebih komplit berisi
            daging,telur dan terdapat api yang menyala diatasnya
          </p>
          <p className="produk-price">Rp 30.000</p>
        </div>
        <div className="produk-item">
          <img src="/mieayam3.jpg" alt="Produk 3" className="produk-img" />
          <p className="produk-text">Mie Ayam Utuh</p>
          <p className="produk-description">
            Mie dengan Topping ayam yang lebih banyak yaitu satu ekor ayam
            digoreng tanpa kuah dan tanpa rempah
          </p>
          <p className="produk-price">Rp 50.000</p>
        </div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{ marginBottom: "20px", marginTop: "50px" }}
      >
        <h1 style={{ fontSize: "3rem" }}>Apa Kata Mereka?</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="testimoni">
          <div className="testimoni-item">
            <img src="/zeri.jpg" alt="User 1" className="testimoni-img" />
            <p className="testimoni-text">
              "Mie Ayam Fire Pak Joko sungguh menggugah selera. Rasanya luar
              biasa!"
            </p>
            <p className="testimoni-author">- Rizal Zeri(Food Vlogger)</p>
          </div>
          <div className="testimoni-item">
            <img src="/dany.jpeg" alt="User 2" className="testimoni-img" />
            <p className="testimoni-text">
              "Saya jatuh cinta pada Mie Ayam Fire Pak Joko! Sempurna!"
            </p>
            <p className="testimoni-author">
              - Drajat Dany(Ketua Komunitas Pecinta Mie Ayam Jakarta)
            </p>
          </div>
          <div className="testimoni-item">
            <img src="/anov.jpg" alt="User 3" className="testimoni-img" />
            <p className="testimoni-text">
              "Mie Ayam Fire Pak Joko adalah favorit saya. Harganya terjangkau!"
            </p>
            <p className="testimoni-author">
              - Alfrethanov (Pengusaha Tiongkok)
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div
        className="flex items-center justify-center"
        style={{ marginBottom: "10px", marginTop: "50px" }}
      >
        <h1 style={{ fontSize: "3rem" }}>Jangan Lupa Kunjungi Kami di : </h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 style={{ fontSize: "2rem" }}>Pasar Lama , Kota Tangerang </h1>
      </div>
      <div className="map-container">
        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.791253423378!2d106.63122751477096!3d-6.216136995491313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f86b82b2bdcd%3A0x73e5be01a0e09152!2sPasar%20Lama%2C%20Kota%20Tangerang%2C%20Banten!5e0!3m2!1sen!2sid!4v1606832624609!5m2!1sen!2sid"
        />
      </div>
      <br></br>
      <br></br>
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} MIE AYAM FIRE PAK JOKO</p>
          <p>Kontak: 0815xxxxzzzz</p>
          <p>Lokasi : Pasar Lama, Kota Tangerang</p>
        </div>
      </footer>

      <style jsx>{`
        .arrow {
          position: absolute;
          top: 50%;
          background: none;
          border: none;
          font-size: 24px;
          color: yellow;
          cursor: pointer;
          z-index: 2;
        }
        .arrow-left {
          left: 20px;
        }
        .arrow-right {
          right: 20px;
        }
        .image-container {
          width: 1900px;
          height: 500px;
          position: relative;
          overflow: hidden;
        }
        .image {
          object-fit: cover;
          width: 100%;
          height: 100%;
          position: absolute;
          transition: transform s;
        }
        .visible {
          transform: translateX(0%);
        }
        .hidden {
          transform: translateX(100%);
        }
        .icon-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 120px;
        }
        .icon {
          width: 100px;
          height: 100px;
        }
        .testimoni {
          display: flex;
          justify-content: center;
          margin-top: 60px;
        }
        .testimoni-item {
          text-align: center;
          margin: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .testimoni-img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }
        .testimoni-text {
          font-size: 1.2rem;
          margin-top: 10px;
        }
        .testimoni-author {
          font-weight: bold;
          margin-top: 10px;
        }
        .produk {
          display: flex;
          justify-content: center;
          margin-top: 60px;
        }
        .produk-item {
          text-align: center;
          margin: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .produk-img {
          width: 300px;
          height: 300px;
          border-radius: 75%;
          object-fit: cover;
        }

        .produk-text {
          font-size: 1.2rem;
          margin-top: 10px;
        }
        .produk-price {
          font-weight: bold;
          margin-top: 10px;
        }

        .map-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px; /* Sesuaikan tinggi sesuai kebutuhan */
        }
        .map-container iframe {
          border: 0; /* Menghapus border iframe jika ada */
        }

        footer {
          background-color: #333; /* Ganti dengan warna latar belakang yang Anda inginkan */
          color: white;
          padding: 20px 0;
          text-align: center;
        }
      
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
