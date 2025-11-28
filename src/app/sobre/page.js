import Link from "next/link";

export default function Sobre() {
  return (
    <div id="container" style={{ maxWidth: "600px", margin: "0 auto", paddingTop: "40px" }}>

      <h1>Sobre mim</h1>

      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        Olá! Meu nome é Évelyn Inácio. Sou professora do curso Técnico em Informática para Internet
        e do curso de Sistemas de Informação, com experiência em desenvolvimento web,
        metodologias ativas, tecnologias educacionais e pesquisa em interações emocionais em ambientes virtuais.
      </p>

      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        Trabalhei com HTML, CSS, JavaScript, PHP, Flask, React e Next.js — e atualmente estudo
        como a IA pode apoiar a aprendizagem e promover experiências mais humanas e personalizadas.
      </p>

      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        Além da docência, gosto de criar materiais pedagógicos, desenvolver projetos web e contribuir com a
        formação crítica e criativa dos alunos na área de tecnologia.
      </p>

      <Link href="/">
        ← Voltar
      </Link>
    </div>
  );
}
