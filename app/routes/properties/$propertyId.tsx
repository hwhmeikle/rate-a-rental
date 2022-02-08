import { LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
  return {
    id: "123",
    address: "123 Fake St, Faketon, Fakeington",
  };
};

export default function PropertySlug() {
  const property = useLoaderData();

  return (
    <div>
      <h1>{property.address}</h1>
    </div>
  );
}
