

export default function Profile({ isLight }) {
  return (
    <div id="profile">
      <img src={isLight ? "/avatar-light.png" : "/avatar.png"} alt="Foto de perfil" />
      <p>@evelyninacio</p>
    </div>
  );
}