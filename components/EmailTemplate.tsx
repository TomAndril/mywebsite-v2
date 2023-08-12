interface Props {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({ email, message, name }: Props) {
  return (
    <div>
      <h1>Hi! {name} sent you a message</h1>
      <p>{message}</p>
      <p>Reply to: {email}</p>
    </div>
  );
}
