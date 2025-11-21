const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Tentang <span className="text-gradient">Saya</span>
        </h2>
        
        <div className="card-gradient rounded-2xl p-8 border border-border animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Saya adalah seorang developer passionate yang fokus pada pembuatan aplikasi web modern dan responsif. 
            Dengan pengalaman lebih dari 5 tahun di industri teknologi, saya telah membantu berbagai klien 
            mewujudkan visi digital mereka.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Saya percaya bahwa kombinasi antara desain yang baik dan kode yang clean adalah kunci untuk 
            menciptakan produk digital yang sukses. Mari kita wujudkan ide Anda menjadi kenyataan!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
