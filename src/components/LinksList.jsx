import Link from "next/link";
export default function LinkList() {
  return (
    <ul>
      <li><a href="#">Inscreva-se na disciplina</a></li>
      <li><a href="#">Baixe os materiais</a></li>
      <li><a href="#">Veja meu portfólio</a></li>

      <li>
        <Link href="/sobre">Sobre mim</Link>
      </li>
    </ul>
  );
}
