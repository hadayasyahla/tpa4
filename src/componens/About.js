import React from 'react'
import './About.css'

function About() {
  return ( 
    <div>

    <h2>About me</h2> 
    <div className='about'>
      <div className='text-about'>
            <p>Hai gays Namaku Nurul Lita Syahla Hadaya biasa dipanggil lita.</p>
            <p> aku tinggal di kota Tegal Jawa Tengah. Aku Mahasiswa semester 5 Kampus Politeknik Harapan Bersama kota Tegal. </p>
            <p>Hobiku makan dan menonton Film, makanan dan minuman favoritku apa aja yang penting manis.</p>
            <p>aku mahasiswa Teknik Informatika , suka mengedit foto dan video . Aku pernah mengikuti lomba Video Kreatif , Sering membuat konten dan masih banyak lagi.  </p>
      </div>

      <div className='about-img'>
        <img 
          src="https://res.cloudinary.com/ddhkwq4zk/image/upload/v1665244147/Screenshot_5_ueyf3h.png"
          alt="new"
          />
      </div>
  </div>
</div>
  )
}

export default About;