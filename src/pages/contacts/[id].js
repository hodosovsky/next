import ContactInfo from "@/components/ContactInfo";
import Heading from "@/components/Heading";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }
  return {
    props: { contact: data },
  };
};

const Contacts = ({ contact }) => {
  return (
    <>
      <Head>
        <title>{contact.name}</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contacts;
