export default function RegistedUser({ params }: { params: { user: string } }) {
  const user = params.user;

  return <>Meu user {user}</>;
}
