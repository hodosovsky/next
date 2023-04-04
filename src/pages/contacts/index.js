import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }
  return {
    props: { contacts: data },
  };
};

const contactPage = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default contactPage;
