interface Props {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({ email, message, name }: Props) {
  return (
    <div>
      <h1>Hi, {name}</h1>
      <p>{message}</p>
      <p>From: {email}</p>
    </div>
  );
}
