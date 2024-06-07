import { LoaderContainer } from "react18-loaders";
import { Bars1 } from "react18-loaders/dist/server/bars/bars1";

export default function Loader({ loading }: { loading?: boolean }) {
  return (
    <LoaderContainer loading={loading}>
      <Bars1 color="red" />
    </LoaderContainer>
  );
}
